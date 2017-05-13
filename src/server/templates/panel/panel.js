let index = `
<div class="royal-mainPanel  + (new HtmlDocument()).identityClass + ">
    <div class="royal-panel-nav">
        <button class="royal-close-panel royal-button"
            onclick="(new HtmlDocument())
                .clear(document.getElementsByClassName(
                    (new HtmlDocument()).identityClass)
                )">
                <i class="material-icons">settings_power</i> +
        </button>
        <div class="royal-dragButton"><i class="material-icons">open_with</i></div>
    </div>
    <hr>
    <div class="royal-modules royal-dev-js">
        Loading. . .
    </div>
</div>

<script src="/require/socket" class="royal-dev-js"></script>
`;

export {index};
