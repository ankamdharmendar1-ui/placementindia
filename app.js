document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const wordsCount = document.getElementById("words");
    const scanBtn = document.getElementById("scanBtn");
    const statusMessage = document.getElementById("statusMessage");
    const progressContainer = document.getElementById("progressContainer");
    const progressBar = document.getElementById("progressBar");
    const overallScore = document.getElementById("overallScore");
    const riskBadge = document.getElementById("riskBadge");
    const toolTabs = document.querySelectorAll(".tool-tab");
    const highlightedText = document.getElementById("highlightedText");
    const sourceList = document.getElementById("sourceList");

    let activeTool = "plagiarism";

    // Tab Switching Logic
    toolTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            toolTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            activeTool = tab.dataset.tool;
            
            // Update placeholders based on tool
            if (activeTool === "plagiarism") {
                textInput.placeholder = "Paste your text here to begin scanning for plagiarism...";
                scanBtn.textContent = "Check Originality";
            } else if (activeTool === "ai") {
                textInput.placeholder = "Paste your text here to detect AI-generated content (GPT-4, Claude, etc.)...";
                scanBtn.textContent = "Detect AI Content";
            } else if (activeTool === "grammar") {
                textInput.placeholder = "Paste your text here to check for grammar and spelling issues...";
                scanBtn.textContent = "Fix Grammar";
            }
        });
    });

    // Word Counter
    textInput.addEventListener("input", () => {
        const text = textInput.value.trim();
        const words = text ? text.split(/\s+/).length : 0;
        wordsCount.textContent = words;
        
        if (words > 2500) {
            wordsCount.style.color = "#ef4444";
        } else {
            wordsCount.style.color = "inherit";
        }
    });

    const API_BASE = "/_/backend/api"; // Production API Route
    const AI_SERVICE_BASE = "http://localhost:8000/scan"; // DeepSearch Engine

    function setStatus(message, type = "") {
        statusMessage.classList.remove("hidden");
        statusMessage.textContent = message;
        statusMessage.className = `status-message ${type}`.trim();
    }

    async function runApiScan(text) {
        const response = await fetch(`${AI_SERVICE_BASE}/text`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, language: "en", top_k_sources: 7 })
        });
        if (!response.ok) throw new Error("DeepSearch scan failed.");
        return response.json();
    }

    async function runApiAiDetect(text) {
        const response = await fetch(`${API_BASE}/ai-detect/detect`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });
        if (!response.ok) throw new Error("AI Detection failed.");
        return response.json();
    }

    scanBtn.addEventListener("click", async () => {
        const text = textInput.value.trim();
        if (!text) {
            setStatus("Please provide some text to analyze.", "error");
            return;
        }

        scanBtn.disabled = true;
        progressContainer.classList.remove("hidden");
        setStatus(`Running ${activeTool} analysis...`, "");

        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            if (progress > 90) progress = 90;
            progressBar.style.width = `${progress}%`;
        }, 300);

        try {
            if (activeTool === "plagiarism") {
                const data = await runApiScan(text);
                updateUIResults(data.score, data.matches);
                setStatus(`Scan complete! Found ${data.score}% similarity.`, "success");
            } else if (activeTool === "ai") {
                const data = await runApiAiDetect(text);
                updateUIResults(data.ai_score, []);
                setStatus(`AI analysis complete! Confidence: ${data.ai_score}%`, "success");
            } else if (activeTool === "grammar") {
                setStatus("Grammar checker is analyzing your text...", "success");
                // Grammar logic would go here
            }
        } catch (error) {
            setStatus(`Error: ${error.message}`, "error");
        } finally {
            clearInterval(interval);
            progressBar.style.width = "100%";
            scanBtn.disabled = false;
            setTimeout(() => {
                progressContainer.classList.add("hidden");
                progressBar.style.width = "0%";
            }, 500);
        }
    });

    function updateUIResults(score, matches) {
        overallScore.textContent = score;
        
        // Risk Badge Logic
        if (score < 10) {
            riskBadge.textContent = "Perfect";
            riskBadge.className = "risk low";
        } else if (score < 30) {
            riskBadge.textContent = "Low Risk";
            riskBadge.className = "risk low";
        } else {
            riskBadge.textContent = "High Risk";
            riskBadge.className = "risk high";
        }

        // Update Source List
        if (matches && matches.length > 0) {
            sourceList.innerHTML = matches.map(m => `
                <div class="source-item">
                    <div class="source-info">
                        <strong>${m.url.split('/')[2]}</strong>
                        <p>${m.title || 'Academic Source'}</p>
                    </div>
                    <div class="source-match">${m.similarity}%</div>
                </div>
            `).join('');
        } else {
            sourceList.innerHTML = '<p class="empty-state">No significant matches found.</p>';
        }
    }
});
