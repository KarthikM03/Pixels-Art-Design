const cl = document.querySelectorAll(".c")
const gr = document.querySelectorAll(".colors")
gr.forEach(function (e) {
    e.addEventListener("click", function () {
        y = this.style.backgroundColor;
        cl.forEach(function (e) {
            e.addEventListener("click", function () {
                if (y != "white") {
                    this.style.color = y
                    this.style.backgroundColor = y;

                }
                else {
                    this.style.backgroundColor = "white";
                    this.style.color = "black"
                }
            })
        })
    })
})

