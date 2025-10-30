function previewimage(event) {
            const file = event.target.files[0];
            if (file) {
                const preview = document.getElementById("image-preview");
                const reader = new FileReader();
                reader.onload = function (e) {
                    preview.src = e.target.result;
                    preview.style.display = "block";
                };
                reader.readAsDataURL(file);
            }
        }