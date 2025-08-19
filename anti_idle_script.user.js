(function () {
    'use strict';

    console.log("🔄 Allen Anti-Idle Script Running");

    // Simulate user activity every 40s
    setInterval(() => {
        const event = new MouseEvent('mousemove', {
            bubbles: true,
            clientX: Math.random() * window.innerWidth,
            clientY: Math.random() * window.innerHeight
        });
        window.dispatchEvent(event);

        window.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Shift',
            bubbles: true
        }));

        console.log("🟢 Faked activity");
    }, 40000);

    // Observe DOM for popup changes
    const observer = new MutationObserver(() => {
        const btn = [...document.querySelectorAll('button')]
            .find(b => b.textContent.toLowerCase().includes("yes"));
        if (btn) {
            btn.click();
            console.log("✅ Auto-clicked 'Yes, I'm here' button");
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
