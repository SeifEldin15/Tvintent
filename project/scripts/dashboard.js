
        document.addEventListener("DOMContentLoaded", function () {
            const addInputButton = document.getElementById("addInput");
            const inputContainer = document.getElementById("inputContainer");

            addInputButton.addEventListener("click", function () {
                 const titleInput = document.createElement("input");
                const paragraphInput = document.createElement("input");

                 titleInput.type = "text";
                titleInput.name = "paragraph-header";
                titleInput.className = "info-inputs";
                titleInput.placeholder = "Paragraph Header";

                paragraphInput.type = "text";
                paragraphInput.name = "post-paragraph";
                paragraphInput.className = "post-content";
                paragraphInput.placeholder = "Post Paragraph";

                 inputContainer.appendChild(titleInput);
                inputContainer.appendChild(paragraphInput);
            });
        });
    