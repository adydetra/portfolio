const vm = new Vue({
    el: '#app',
    data() {
        return { 
            develop: [
                {
                    demoid: "demo01", modalid: "modal-01", modal: "#modal-01", modalclose: "close-modal-01",
                    imgproject: "images/projects/project1.png", imgbg: "images/projects/bg-project1.jpg",
                    description: "Personal - Blog Tutorial",
                    col: "col-sm-4 my-5",
                    imgicon: "images/icon/personal.svg",
                    imgclose: "images/close.svg"
                },
                {
                    demoid: "demo02", modalid: "modal-02", modal: "#modal-02", modalclose: "close-modal-02",
                    imgproject: "images/projects/project2.png", imgbg: "images/projects/bg-project2.jpg",
                    description: "Personal - Blog Information",
                    col: "col-sm-4 my-5",
                    imgicon: "images/icon/personal.svg",
                    imgclose: "images/close.svg"
                },
                {
                    demoid: "demo03", modalid: "modal-03", modal: "#modal-03", modalclose: "close-modal-03",
                    imgproject: "images/projects/project3.png", imgbg: "images/projects/bg-project3.png",
                    description: "Team - Decorative Plants",
                    col: "col-sm-4 my-5",
                    imgicon: "images/icon/team.svg",
                    imgclose: "images/close.svg"
                },
                {
                    demoid: "demo04", modalid: "modal-04", modal: "#modal-04", modalclose: "close-modal-04",
                    imgproject: "images/projects/project4.png", imgbg: "images/projects/bg-project4.jpg",
                    description: "Team (Contest | Maritime Hackathon 2021) - Maritime Explore",
                    col: "col-sm-6 my-5",
                    imgicon: "images/icon/team.svg",
                    imgclose: "images/close.svg"
                },
                {
                    demoid: "demo05", modalid: "modal-05", modal: "#modal-05", modalclose: "close-modal-05",
                    imgproject: "images/projects/project5.jpg", imgbg: "images/projects/bg-project5.jpg",
                    description: "Team - Learning Centre Indonesia",
                    col: "col-sm-6 my-5",
                    imgicon: "images/icon/team.svg",
                    imgclose: "images/close.svg"
                },
                {
                    demoid: "demo06", modalid: "modal-06", modal: "#modal-06", modalclose: "close-modal-06",
                    imgproject: "images/projects/project6.jpg", imgbg: "images/projects/bg-project6.jpg",
                    description: "Personal - Dewa Drawing",
                    col: "col-sm-4 my-5",
                    imgicon: "images/icon/personal.svg",
                    imgclose: "images/close.svg"
                },
                {
                    demoid: "demo07", modalid: "modal-07", modal: "#modal-07", modalclose: "close-modal-07",
                    imgproject: "images/projects/project7.png", imgbg: "images/projects/bg-project7.jpg",
                    description: "Team (Contest | KKSI 2021) - GoPrakerin",
                    col: "col-sm-4 my-5",
                    imgicon: "images/icon/team.svg",
                    imgclose: "images/close.svg"
                },
                {
                    demoid: "demo08", modalid: "modal-08", modal: "#modal-08", modalclose: "close-modal-08",
                    imgproject: "images/projects/project8.png", imgbg: "images/projects/bg-project8.jpg",
                    description: "Personal (LSP / Sertifikasi BNSP) - E-Commerce",
                    col: "col-sm-4 my-5",
                    imgicon: "images/icon/personal.svg",
                    imgclose: "images/close.svg"
                },
                {
                    demoid: "demo09", modalid: "modal-09", modal: "#modal-09", modalclose: "close-modal-09",
                    imgproject: "images/projects/project9.png", imgbg: "images/projects/bg-project9.png",
                    description: "Personal - Bang CV",
                    col: "col-sm-6 d-flex justify-content-center mx-auto my-5",
                    imgicon: "images/icon/personal.svg",
                    imgclose: "images/close.svg"
                },
            ],
            design: [
                {
                    demoid: "design01", modalid: "design-01", modal: "#design-01", modalclose: "close-design-01",
                    imgproject: "images/projects/design/tapply/1.jpg", imgbg: "images/projects/bg-project-design1.jpg",
                    description: "Website",
                    col: "col-sm-4 my-5",
                    imgicon: "images/icon/web.svg",
                    imgclose: "images/close.svg"
                },
                {
                    demoid: "design02", modalid: "design-02", modal: "#design-02", modalclose: "close-design-02",
                    imgproject: "images/projects/design/perpus/1.jpg", imgbg: "images/projects/bg-project-design2.jpg",
                    description: "Dekstop Software",
                    col: "col-sm-4 my-5",
                    imgicon: "images/icon/java.svg",
                    imgclose: "images/close.svg"
                },
                {
                    demoid: "design03", modalid: "design-03", modal: "#design-03", modalclose: "close-design-03",
                    imgproject: "images/projects/design/cebong-bhizer/1.jpg", imgbg: "images/projects/bg-project-design3.jpg",
                    description: "Website",
                    col: "col-sm-4 my-5",
                    imgicon: "images/icon/web.svg",
                    imgclose: "images/close.svg"
                },
            ],
            
        }
    },
    computed: {
        visibleDevelop() {
            return this.develop.slice(0, this.developVisible)
        },
        visibleDesign() {
            return this.design.slice(0, this.designVisible)
        }
    }
})