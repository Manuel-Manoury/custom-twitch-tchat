let MAX_DISPLAYABLE_MESSAGES = 30;
let MESSAGE_DEFAULT_COLOR = "";

const tchat = document.querySelector("#tchat");

window.addEventListener('onEventReceived', function (obj) {
    if (obj.detail.event.listener === 'widget-button') {

        if (obj.detail.event.field === 'testMessage') {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    listener: "message", 
                    event: {
                        service: "twitch",
                        data: {
                            time: Date.now(),
                            tags: {
                                "badge-info": "",
                                badges: "moderator/1,partner/1",
                                color: "#5B99FF",
                                "display-name": "StreamElements",
                                emotes: "25:46-50",
                                flags: "",
                                id: "43285909-412c-4eee-b80d-89f72ba53142",
                                mod: "1",
                                "room-id": "85827806",
                                subscriber: "0",
                                "tmi-sent-ts": "1579444549265",
                                turbo: "0",
                                "user-id": "100135110",
                                "user-type": "mod"
                            },
                            nick: "Sheiyah",
                            userId: "100135110",
                            displayName: "Sheiyah",
                            displayColor: "#5B99FF",
                            badges: [{
                                type: "moderator",
                                version: "1",
                                url: "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
                                description: "Moderator"
                            }, {
                                type: "partner",
                                version: "1",
                                url: "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
                                description: "Verified"
                            }],
                            channel: "Sheiyah",
                            text: "Howdy! My name is Bill and I am here to serve Kappa",
                            isAction: !1,
                            emotes: [{
                                type: "twitch",
                                name: "Kappa",
                                id: "25",
                                gif: !1,
                                urls: {
                                    1: "https://static-cdn.jtvnw.net/emoticons/v1/25/1.0",
                                    2: "https://static-cdn.jtvnw.net/emoticons/v1/25/1.0",
                                    4: "https://static-cdn.jtvnw.net/emoticons/v1/25/3.0"
                                },
                                start: 46,
                                end: 50
                            }],
                            msgId: "43285909-412c-4eee-b80d-89f72ba53142"
                        },
                        renderedText: 'Howdy! My name is Bill and I am here to serve <img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x" title="Kappa" class="emote">Howdy! My name is Bill and I am here to serve <img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x" title="Kappa" class="emote">Howdy! My name is Bill and I am here to serve <img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x" title="Kappa" class="emote">Howdy! My name is Bill and I am here to serve <img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x" title="Kappa" class="emote">Howdy! My name is Bill and I am here to serve <img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x" title="Kappa" class="emote">Howdy! My name is Bill and I am here to serve <img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x" title="Kappa" class="emote">'
                    }
                }
            });
            window.dispatchEvent(emulated);
        }
        return;
    }
    if (obj.detail.listener === "delete-message") {
        const msgId = obj.detail.event.msgId;
        document.querySelectorAll(`#message-${msgId}`).forEach(msg => msg.remove());
        return;
    } else if (obj.detail.listener === "delete-messages") {
        const sender = obj.detail.event.userId;
        document.querySelectorAll(`.message[data-sender${sender}]`).forEach(msg => msg.remove());
        return;
    }

    if (obj.detail.listener !== "message") return;

    addMessage(obj.detail.event.data, obj.detail.event.renderedText);
});

function addMessage(data, message) {
    const msgColor = data.displayColor || MESSAGE_DEFAULT_COLOR;
    const badges = data.badges.reduce((acc, badge) => {
        return acc + `<img src="${badge.url}" class="badge" />`
    }, "");
    tchat.insertAdjacentHTML(
        'beforeend', 
        `<div 
            id="message-${data.msgId}" 
            data-sender="${data.userId}" 
            class="message" 
            style="--color:${msgColor}"
        >
            <div class="name-container">
                <img src="https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/vip_scroll.svg" class="scroll" />
                <div class="meta">
                    <div class="badges">${badges}</div>
                    <div class="name">${data.displayName}</div>
                </div>
                <img src="https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/vip_scroll.svg" class="scroll" />
            </div>
            <div class="content">
                ${message}
            </div>
            <img src="https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/vip_message_box.svg" class="message-box" />
        </div>`
    )

    
    const messages = document.querySelectorAll(".message");
    const messageCount = messages.length;

    if (messageCount > MAX_DISPLAYABLE_MESSAGES) {
        Array.from(messages).slice(0, messageCount - MAX_DISPLAYABLE_MESSAGES).forEach((msg) => msg.remove());
    }
} 

window.addEventListener('onWidgetLoad', function(obj) {
    const fieldData = obj.detail.fieldData;
    MAX_DISPLAYABLE_MESSAGES = fieldData.MAX_DISPLAYABLE_MESSAGES;
    MESSAGE_DEFAULT_COLOR = fieldData.MESSAGE_DEFAULT_COLOR;
})