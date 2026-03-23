import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hey 👋 I can help you understand sorting algorithms.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
  }, []);

 
  const getResponse = (msg) => {
    const rules = [

      // 1. Best / Fastest
      {
        keywords: ["best", "fastest", "which sorting"],
        response: "No single best. Quick Sort is fastest in practice, Merge Sort is stable."
      },

      // 2. Sorting definition
      {
        keywords: ["what is sorting"],
        response: "Sorting means arranging elements in ascending or descending order."
      },

      // 3. Bubble
      {
        keywords: ["bubble"],
        response: "Bubble Sort: O(n²), stable, in-place."
      },

      // 4. Selection
      {
        keywords: ["selection"],
        response: "Selection Sort: O(n²), not stable."
      },

      // 5. Insertion
      {
        keywords: ["insertion"],
        response: "Insertion Sort: Best O(n), efficient for small or nearly sorted data."
      },

      // 6. Quick
      {
        keywords: ["quick"],
        response: "Quick Sort: Avg O(n log n), fastest in practice, not stable."
      },

      // 7. Merge
      {
        keywords: ["merge"],
        response: "Merge Sort: O(n log n), stable, needs extra space."
      },

      // 8. Heap
      {
        keywords: ["heap"],
        response: "Heap Sort: O(n log n), not stable."
      },

      // 9. Time complexity
      {
        keywords: ["time complexity"],
        response: "Time complexity measures runtime growth: O(n), O(n²), O(n log n)."
      },

      // 10. Space complexity
      {
        keywords: ["space complexity"],
        response: "Space complexity measures memory usage."
      },

      // 11. Stable
      {
        keywords: ["stable"],
        response: "Stable sort preserves order of equal elements. Merge, Bubble, Insertion are stable."
      },

      // 12. In-place
      {
        keywords: ["in place", "in-place"],
        response: "In-place sorting uses constant memory."
      },

      // 13. Quick vs Merge
      {
        keywords: ["quick", "merge"],
        response: "Quick is faster, Merge is stable but uses extra space."
      },

      // 14. Worst case
      {
        keywords: ["worst"],
        response: "Quick Sort worst case is O(n²)."
      },

      // 15. Best case
      {
        keywords: ["best case"],
        response: "Best case is O(n log n), insertion can be O(n)."
      },

      // 16. Nearly sorted
      {
        keywords: ["nearly sorted"],
        response: "Insertion sort is best for nearly sorted arrays."
      },

      // 17. Compare algorithms
      {
        keywords: ["compare"],
        response: "Bubble/Selection: O(n²), Quick/Merge: O(n log n)."
      },

      // 18. When to use
      {
        keywords: ["when to use"],
        response: "Quick for speed, Merge for stability."
      },

      // 19. Internal sorting
      {
        keywords: ["internal"],
        response: "Internal sorting happens in memory."
      },

      // 20. External sorting
      {
        keywords: ["external"],
        response: "External sorting handles large data (files)."
      },

      // 21. Non-comparison
      {
        keywords: ["counting", "radix", "non comparison"],
        response: "Counting & Radix Sort are non-comparison sorts."
      },

      // 22. Which stable
      {
        keywords: ["which stable"],
        response: "Stable: Merge, Bubble, Insertion."
      },

      // 23. Which in-place
      {
        keywords: ["which in place"],
        response: "In-place: Bubble, Selection, Quick."
      },

      // 24. Why quick sort fast
      {
        keywords: ["why quick"],
        response: "Quick sort is fast due to cache efficiency."
      },

      // 25. Divide and conquer
      {
        keywords: ["divide"],
        response: "Merge and Quick use divide & conquer."
      },

      // 26. Adaptive sorting
      {
        keywords: ["adaptive"],
        response: "Insertion sort is adaptive."
      },

      // 27. Online sorting
      {
        keywords: ["online"],
        response: "Insertion sort is online."
      },

      // 28. Swaps
      {
        keywords: ["swap"],
        response: "Selection sort minimizes swaps."
      },

      // 29. Memory usage
      {
        keywords: ["memory"],
        response: "👉 Merge uses extra memory, Quick uses less."
      },

      // 30. General sorting
      {
        keywords: ["sorting"],
        response: "Sorting arranges elements in order."
      }
    ];

    for (let rule of rules) {
      if (rule.keywords.every(k => msg.includes(k))) {
        return rule.response;
      }
    }

    for (let rule of rules) {
      if (rule.keywords.some(k => msg.includes(k))) {
        return rule.response;
      }
    }

    // ❌ NO MATCH
    return "❌ Sorry, something went wrong!";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    const msg = userMessage.toLowerCase();
    const botReply = getResponse(msg);

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
      setLoading(false);
    }, 500);
  };

  const renderMessage = (msg) => {
    if (msg.sender === 'user') {
      return (
        <div className="text-right">
          <span className="inline-block p-2 rounded-xl bg-green-700 text-white max-w-[85%] break-words">
            {msg.text}
          </span>
        </div>
      );
    } else {
      return (
        <div className="text-left">
          <div
            className="max-w-none bg-gray-800 p-3 rounded-xl"
            dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }}
          />
        </div>
      );
    }
  };

  return (
    <div className={`fixed top-20 right-6 w-[350px] h-[500px] bg-[#111] border border-green-700 rounded-xl z-50 shadow-lg flex flex-col transition-all duration-500 ${visible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
      
      <div className="p-3 border-b border-green-700 flex justify-between">
        <h2 className="text-green-400 font-bold">Algo Assistant</h2>
        <button onClick={() => { setVisible(false); setTimeout(onClose, 300); }} className="text-white hover:text-red-500">✕</button>
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div key={i}>{renderMessage(msg)}</div>
        ))}
        {loading && <div className="text-gray-400 italic animate-pulse">Typing...</div>}
      </div>

      <div className="p-3 flex gap-2 border-t border-green-700">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask your doubt..."
          className="flex-1 px-3 py-2 rounded bg-gray-900 text-white border border-green-700"
        />
        <button onClick={handleSend} className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;