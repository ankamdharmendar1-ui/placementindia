document.addEventListener("DOMContentLoaded", () => {
    const API_BASE = "http://localhost:8000";

    const textInput = document.getElementById("textInput");
    const highlightedText = document.getElementById("highlightedText");
    const wordsDisplay = document.getElementById("words");
    const scanBtn = document.getElementById("scanBtn");
    const scanFileBtn = document.getElementById("scanFileBtn");
    const fileInput = document.getElementById("fileInput");
    const downloadReportBtn = document.getElementById("downloadReportBtn");
    const statusMessage = document.getElementById("statusMessage");
    const toolTabs = document.querySelectorAll(".tool-tab");
    const progressContainer = document.getElementById("progressContainer");
    const progressBar = document.getElementById("progressBar");
    const sourceList = document.getElementById("sourceList");
    const overallScore = document.getElementById("overallScore");
    const riskBadge = document.getElementById("riskBadge");

    let activeTool = "plagiarism";
    let latestScanId = null;

    const updateWordCount = () => {
        const words = textInput.value.trim() ? textInput.value.trim().split(/\s+/).length : 0;
        wordsDisplay.textContent = words.toLocaleString();
        wordsDisplay.parentElement.style.color = words > 2500 ? "#dc2626" : "";
    };

    const escapeHtml = (s) =>
        s.replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");

    function highlightMatches(text, matches) {
        let output = escapeHtml(text);
        matches
            .sort((a, b) => b.sentence.length - a.sentence.length)
            .forEach((m) => {
                const cls = m.level === "high" ? "mark-high" : m.level === "partial" ? "mark-mid" : "";
                if (!cls) return;
                const escapedSentence = escapeHtml(m.sentence);
                output = output.replaceAll(escapedSentence, `<span class="${cls}">${escapedSentence}</span>`);
            });
        return output;
    }

    function computeRisk(score) {
        if (score > 50) return "high";
        if (score > 20) return "medium";
        return "low";
    }

    function renderResults(matches, score) {
        overallScore.textContent = score;
        const risk = computeRisk(score);
        riskBadge.className = `risk ${risk}`;
        riskBadge.textContent = risk[0].toUpperCase() + risk.slice(1);

        if (!matches.length) {
            sourceList.innerHTML = '<p class="empty-state">No matching sources found.</p>';
            return;
        }
        sourceList.innerHTML = matches
            .map(
                (m) => `
                <article class="source-item">
                    <a href="${m.url}" target="_blank" rel="noreferrer">${m.url}</a>
                    <p class="source-meta">${Math.round(m.score * 100)}% similarity (${m.level})</p>
                </article>
            `
            )
            .join("");
    }

    function setStatus(message, type = "") {
        if (!message) {
            statusMessage.className = "status-message hidden";
            statusMessage.textContent = "";
            return;
        }
        statusMessage.textContent = message;
        statusMessage.className = `status-message ${type}`.trim();
    }

    async function runApiScan(text) {
        const response = await fetch(`${AI_SERVICE_BASE}/text`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text, language: "en", top_k_sources: 7 })
        });
        if (!response.ok) {
            const err = await response.json().catch(() => ({ detail: "Scan failed" }));
            throw new Error(err.detail || "Scan failed");
        }
        return response.json();
    }

    async function runApiFileScan(file) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch(`${AI_SERVICE_BASE}/file`, {
            method: "POST",
            body: formData
        });
        if (!response.ok) {
            const err = await response.json().catch(() => ({ detail: "File scan failed" }));
            throw new Error(err.detail || "File scan failed");
        }
        return response.json();
    }

    async function downloadReport(scanId) {
        const response = await fetch(`${AI_SERVICE_BASE}/report/${scanId}`);
        if (!response.ok) throw new Error("Unable to download report.");
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `plagiarism-report-${scanId}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    function applyScanResult(text, data) {
        const matches = (data.matches || []).map((m) => ({
            sentence: m.sentence,
            score: m.combined_score,
            level: m.level,
            url: m.source_url || "#"
        }));
        highlightedText.innerHTML = highlightMatches(text, matches);
        highlightedText.classList.remove("hidden");
        textInput.classList.add("hidden");
        renderResults(matches, data.score || 0);
        latestScanId = data.scan_id || null;
        downloadReportBtn.disabled = !latestScanId;
    }

    textInput.addEventListener("input", updateWordCount);
    downloadReportBtn.addEventListener("click", async () => {
        if (!latestScanId) return;
        try {
            await downloadReport(latestScanId);
            setStatus("Report downloaded successfully.", "success");
        } catch (error) {
            setStatus(error.message || "Report download failed.", "error");
        }
    });

    toolTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            toolTabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            activeTool = tab.dataset.tool;
            if (activeTool === "plagiarism") {
                scanBtn.textContent = "Check for Plagiarism";
            } else if (activeTool === "ai") {
                scanBtn.textContent = "Detect AI Content";
            } else {
                scanBtn.textContent = "Check Grammar";
            }
        });
    });

    const API_BASE = "/api"; // Works automatically on Vercel
    const AI_SERVICE_BASE = "http://localhost:8000/scan"; // Still needs a live URL for the AI Service

    async function runApiAiDetect(text) {
        const response = await fetch(`${API_BASE}/ai-detect/detect`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });
        if (!response.ok) throw new Error("AI Detection failed");
        return response.json();
    }

    async function runApiGrammar(text) {
        const response = await fetch(`${API_BASE}/grammar/check`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });
        if (!response.ok) throw new Error("Grammar check failed");
        return response.json();
    }

    scanBtn.addEventListener("click", async () => {
        const text = textInput.value.trim();
        if (!text) {
            setStatus("Please paste text to scan.", "error");
            return;
        }

        scanBtn.disabled = true;
        progressContainer.classList.remove("hidden");
        highlightedText.classList.add("hidden");
        textInput.classList.remove("hidden");

        let progress = 0;
        const interval = setInterval(() => {
            progress += 12 + Math.random() * 8;
            if (progress > 92) progress = 92;
            progressBar.style.width = `${progress}%`;
        }, 250);

        try {
            if (activeTool === "plagiarism") {
                setStatus("Checking plagiarism across web sources...", "");
                const data = await runApiScan(text); // Uses AI_SERVICE_BASE
                applyScanResult(text, data);
                setStatus(`Scan complete. Similarity score: ${data.score}% (${data.category}).`, "success");
            } else if (activeTool === "ai") {
                setStatus("Analyzing text for AI-generated patterns...", "");
                const data = await runApiAiDetect(text);
                overallScore.textContent = data.ai_score || 0;
                riskBadge.textContent = data.ai_score > 50 ? "High AI" : "Low AI";
                riskBadge.className = `risk ${data.ai_score > 50 ? 'high' : 'low'}`;
                setStatus(`AI Detection complete. AI Score: ${data.ai_score}%`, "success");
            } else if (activeTool === "grammar") {
                setStatus("Checking for grammatical improvements...", "");
                const data = await runApiGrammar(text);
                setStatus(`Grammar check complete. Found ${data.issues?.length || 0} improvements.`, "success");
                // Additional logic to highlight grammar issues can be added here
            }
        } catch (error) {
            setStatus(`Scan failed: ${error.message}`, "error");
        } finally {
            clearInterval(interval);
            progressBar.style.width = "100%";
            scanBtn.disabled = false;
            setTimeout(() => {
                progressContainer.classList.add("hidden");
                progressBar.style.width = "0%";
            }, 350);
        }
    });

    scanFileBtn.addEventListener("click", async () => {
        const file = fileInput.files?.[0];
        if (!file) {
            setStatus("Please choose a TXT, PDF, or DOCX file first.", "error");
            return;
        }
        scanFileBtn.disabled = true;
        progressContainer.classList.remove("hidden");
        progressBar.style.width = "30%";
        try {
            setStatus("Uploading and scanning file...", "");
            const data = await runApiFileScan(file);
            const stitchedText = (data.matches || []).map((m) => m.sentence).join("\n\n");
            textInput.value = stitchedText || "Scanned from file.";
            updateWordCount();
            applyScanResult(textInput.value, data);
            progressBar.style.width = "100%";
            setStatus(`File scan complete. Similarity score: ${data.score}% (${data.category}).`, "success");
        } catch (error) {
            setStatus(error.message || "File scan failed.", "error");
        } finally {
            setTimeout(() => {
                progressContainer.classList.add("hidden");
                progressBar.style.width = "0%";
            }, 350);
            scanFileBtn.disabled = false;
        }
    });

    updateWordCount();
});
