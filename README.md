# allen-anti-idle
Tampermonkey userscript to prevent idle timeout in Allen Live Class by faking activity and auto-clicking presence confirmation.

How it works?
- Fakes user activity every 40 seconds (`mousemove` + `keydown`)
- Auto-detects the idle popup and clicks the confirmation button
- Lightweight and runs in the background
- Console logs for debugging

⚠️**For educational purposes only.**
