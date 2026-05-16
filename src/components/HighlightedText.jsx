import React from 'react';

function HighlightedText({ text, matches }) {
  // Create an array to track which parts of the text are matches
  const textParts = [];
  let lastIndex = 0;
  
  // Sort matches by their starting index
  const sortedMatches = [...matches].sort((a, b) => a.startIndex - b.startIndex);
  
  sortedMatches.forEach(match => {
    // Add the text before the match
    if (match.startIndex > lastIndex) {
      textParts.push({
        text: text.substring(lastIndex, match.startIndex),
        isMatch: false
      });
    }
    
    // Add the matched text
    textParts.push({
      text: text.substring(match.startIndex, match.endIndex),
      isMatch: true,
      source: match.source
    });
    
    lastIndex = match.endIndex;
  });
  
  // Add any remaining text after the last match
  if (lastIndex < text.length) {
    textParts.push({
      text: text.substring(lastIndex),
      isMatch: false
    });
  }
  
  return (
    <div className="whitespace-pre-wrap leading-relaxed">
      {textParts.map((part, index) => {
        if (part.isMatch) {
          return (
            <span 
              key={index} 
              className="bg-red-100 text-red-800 relative group"
            >
              {part.text}
              <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-white p-2 rounded shadow-lg border border-gray-200 z-10 min-w-[200px]">
                <div className="text-xs text-gray-500 mb-1">Matched Source:</div>
                <a 
                  href={part.source} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm truncate block"
                  title={part.source}
                >
                  {part.source}
                </a>
              </div>
            </span>
          );
        } else {
          return <span key={index}>{part.text}</span>;
        }
      })}
    </div>
  );
}

export default HighlightedText;
