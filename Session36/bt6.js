document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".stars");
    const ratingText = document.getElementById("selected-rating");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("comment-list");

    let selectedRating = localStorage.getItem("selectedRating") || 0;
    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    updateStars(selectedRating);
    renderComments();

    stars.forEach((star) => {
        star.addEventListener("click", function () {
            selectedRating = this.getAttribute("data-value");
            localStorage.setItem("selectedRating", selectedRating);
            updateStars(selectedRating);
        });
    });

    function updateStars(rating) {
        stars.forEach((star) => {
            if (star.getAttribute("data-value") <= rating) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
        ratingText.textContent = `Bạn đã đánh giá ${rating} sao.`;
    }

    window.submitReview = function () {
        const commentText = commentInput.value.trim();
        if (!commentText || selectedRating == 0) {
            alert("Vui lòng chọn số sao và nhập bình luận!");
            return;
        }

        const newComment = {
            rating: selectedRating,
            text: commentText,
        };

        comments.push(newComment);
        localStorage.setItem("comments", JSON.stringify(comments));
        renderComments();
        commentInput.value = "";
    };

    function renderComments() {
        commentList.innerHTML = "";
        comments.forEach((comment) => {
            const li = document.createElement("li");
            li.innerHTML = `<span>${"★".repeat(comment.rating)}${"☆".repeat(5 - comment.rating)}</span> 
                        <b>${comment.text}</b>`;
            commentList.appendChild(li);
        });
    }
});