export default class Views {
  constructor() {
    this.commentNode = document.getElementById("comment");
    this.baseWrapper = document.getElementById("comment-wrapper");
    this.input = document.getElementById("input");

    this.renderCommentInput();
    this.initReplyListener();
  }

  renderCommentNode(comment, parentId) {
    const node = this.createCommentNode(comment);

    if (comment.level === 0) {
      this.baseWrapper.appendChild(node);
    } else {
      document
        .getElementById(parentId)
        .querySelector(`.nesting`)
        .appendChild(node);
    }
  }

  createCommentNode(comment) {
    const node = this.commentNode.content.cloneNode(true);
    node.querySelector(".comment").id = comment.id;
    node.querySelector(".comment").classList.add(`level-${comment.level}`);
    node.querySelector(".comment").style.padding = "0px 0px 0px 15px";
    node.querySelector(".content").textContent = comment.title;

    this.renderCommentInput(node.querySelector(".comment-box"));

    return node;
  }

  renderAllComments(comments, baseWrapper = this.baseWrapper) {
    for (let comment of comments) {
      const node = this.createCommentNode(comment);

      if (comment.replies) {
        this.renderAllComments(comment.replies, node.querySelector(".nesting"));
      }

      baseWrapper.appendChild(node);
    }
  }

  renderCommentInput(baseWrapper = this.baseWrapper) {
    const node = this.input.content.cloneNode(true);
    baseWrapper.appendChild(node);
  }

  initCommentListener(callback) {
    document.addEventListener("keyup", (e) => {
      if (e.target.classList.contains("comment-input") && e.code === "Enter") {
        const id = parseInt(e.target.parentNode.parentNode.id, 10);
        // id is parentid
        callback(e.target.value, id);
        e.target.value = "";
        if (e.target.parentNode.id !== "comment-wrapper") {
          e.target.parentNode.classList.add("hidden");
        }
      }
    });
  }

  initReplyListener() {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("reply")) {
        const commentBox =
          e.target.parentNode.parentNode.querySelector(".comment-box");
        commentBox.classList.contains("hidden")
          ? commentBox.classList.remove("hidden")
          : commentBox.classList.add("hidden");
      }
    });
  }

  initDeleteListener(callback) {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
        e.target.parentNode.parentNode.remove();
        callback(parseInt(e.target.parentNode.parentNode.id, 10));
      }
    });
  }
}
