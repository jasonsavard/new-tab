document.addEventListener("DOMContentLoaded", function(event) { 
    const startup = document.getElementById("startup");
    startup.addEventListener("click", () => {
        window.open("https://finance.yahoo.com/portfolio/p_0/view/view_2");
        window.open("https://apps.jasonsavard.com/admin/analytics.html");
        location.href = "https://analytics.google.com/analytics/web/?hl=en&pli=1#dashboard/MS55Ho6-SRuiZ1nIeQJOog/a19036308w38155039p37734515/";
    });

    const copyToClipboard = document.getElementsByClassName("copy-to-clipboard");
    Array.from(copyToClipboard).forEach(element => {
        element.addEventListener("click", event => {
            document.body.classList.add("flash");
            navigator.clipboard.writeText(event.target.closest("a").getAttribute("href")).then(() => {
                setTimeout(() => {
                    document.body.classList.remove("flash");
                }, 200);
                setTimeout(() => {
                    window.close();
                }, 300);
            });
            event.preventDefault();
        });
    });
});