const sentences = [
            "Modern design systems require consistency and clarity. This text serves as a placeholder to help you visualize typography and white space in your upcoming web projects.",
            "Minimalism is not about a lack of content; it is about perfect clarity. Ensure your user interface reflects the quality of your brand through structured and meaningful layouts.",
            "Responsive web design adapts seamlessly across all devices. Use this generator to test how your columns, typography, and padding react to different paragraph lengths.",
            "Typography plays a crucial role in user experience. A well-chosen font with proper line-height and letter-spacing makes your content engaging and readable for everyone.",
            "Clean code is the foundation of a maintainable project. Structure your components with intention, and your interface will naturally feel more professional and reliable to your users."
        ];

        const form = document.getElementById("lorem-form");
        const result = document.getElementById("result");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let count = parseInt(document.getElementById("amount").value) || 3;

            let output = "";
            for (let i = 0; i < count; i++) {
                // 1. Har paragraph ke liye random number of sentences (2 se 6 ke beech)
                const numSentences = Math.floor(Math.random() * 3) + 2;

                // 2. Utne sentences ko shuffle karke paragraph banao
                let paragraph = "";
                for (let j = 0; j < numSentences; j++) {
                    paragraph += sentences[Math.floor(Math.random() * sentences.length)] + " ";
                }

                output += `<p>${paragraph}</p>`;
            }
            result.innerHTML = output;
        });

        window.onload = () => form.dispatchEvent(new Event('submit'));