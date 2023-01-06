const MAX_DISPLAYABLE_MESSAGES = 30;
const CUSTOM_APP_CLIENT_ID = "m9g2fk3pxkj5c39ldkkpp1ddie6i7h";
const TWITCH_BADGES = ["broadcaster", "partner", "vip", "moderator", "artist"];
const ROLES = {
  BROADCASTER: "broadcaster",
  PARTNER: "partner",
  VIP: "vip",
  MODERATOR: "moderator",
  ARTIST: "artist",
  BOT: "bot",
  SUBSCRIBER: "subscriber",
};
const ASSETS = {
  NORMAL: {
    NAME_COLOR: "#FF7B7B",
    MSG_COLOR: "#772C4B",
    SCROLL:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/normal_scroll.svg",
    BANNER:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/normal_banner.svg",
    BOX: "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/normal_message_box.svg",
  },
  T1: {
    NAME_COLOR: "#F87DBA",
    MSG_COLOR: "#772C4B",
    SCROLL:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/t1_scroll.svg",
    BANNER:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/t1_banner.svg",
    BOX: "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/t1_message_box.svg",
  },
  T2: {
    NAME_COLOR: "#E797DA",
    MSG_COLOR: "#772C4B",
    SCROLL:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/t2_scroll.svg",
    BANNER:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/t2_banner.svg",
    BOX: "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/t2_message_box.svg",
  },
  T3: {
    NAME_COLOR: "#FF7B7B",
    MSG_COLOR: "#772C4B",
    SCROLL:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/t3_scroll.svg",
    BANNER:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/t3_banner.svg",
    BOX: "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/t3_message_box.svg",
  },
  VIP: {
    NAME_COLOR: "#B481EA",
    MSG_COLOR: "#772C4B",
    SCROLL:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/vip_scroll.svg",
    BANNER:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/vip_banner.svg",
    BOX: "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/vip_message_box.svg",
  },
  BOT: {
    NAME_COLOR: "#FFFFFF",
    MSG_COLOR: "#772C4B",
    SCROLL:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/bot_scroll.svg",
    BANNER:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/bot_banner.svg",
    BOX: "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/bot_message_box.svg",
  },
  FIRST_MESSAGE: {
    NAME_COLOR: "#EC60F4",
    MSG_COLOR: "#772C4B",
    SCROLL:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/first_message_scroll.svg",
    BANNER:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/first_message_banner.svg",
    BOX: "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/first_message_message_box.svg",
  },
  HIGHLIGHT: {
    NAME_COLOR: "#CE6796",
    MSG_COLOR: "#FFFFFF",
    SCROLL:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/highlight_scroll.svg",
    BANNER:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/highlight_banner.svg",
    BOX: "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/highlight_message_box.svg",
  },
  MODERATOR: {
    NAME_COLOR: "#6EA9FF",
    MSG_COLOR: "#772C4B",
    SCROLL:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/modo_scroll.svg",
    BANNER:
      "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/modo_banner.svg",
    BOX: "https://raw.githubusercontent.com/Manuel-Manoury/custom-twitch-tchat/main/assets/modo_message_box.svg",
  },
};
const SUBS = {};
const TEST_MESSAGES = {
  auto: [
    {
      username: "randomBleb",
      badges: "",
      message: "Hi!",
    },
    {
      username: "randomSubscriber",
      badges: "subscriber",
      message: "This is a fake messages to make it easier designing a chat",
    },
    {
      username: "randomVIP",
      badges: "vip,subscriber",
      message:
        "You can change the design by editing it in the settings on the left",
    },
    {
      username: "randomModerator",
      badges: "moderator,subscriber",
      message: "Click the 'Test Message' button for more 4Head !",
    },
    {
      username: "justoneemote",
      badges: "subscriber",
      message: "Jebaited",
    },
    {
      username: "randomVIP",
      badges: "vip",
      message: "4Head 4Head 4Head",
    },
    {
      username: "channelName",
      badges: "broadcaster,subscriber,partner",
      message:
        "Don't forget to uncheck the 'Auto Test' before you start streaming!!",
    },
    {
      username: "chrone_co",
      badges: "",
      message: "If you need help you can contact me on twitter @chrone_co",
    },
  ],
  message: [
    {
      username: "randomBleb",
      badges: "",
      message: "How to send emotes?",
    },
    {
      username: "randomSubscriber",
      badges: "subscriber",
      message: "just subscribe 4Head",
    },
    {
      username: "myCoolModerator",
      badges: "moderator",
      message: "4Head",
    },
    {
      username: "channelName",
      badges: "broadcaster,subscriber,partner",
      message: "don't jebait Jebaited",
    },
    {
      username: "mynameissolongimustbecool",
      badges: "",
      message: "HUH!?",
    },
    {
      username: "ispamlongmessages",
      badges: "subscriber,vip",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      username: "channelName",
      badges: "broadcaster,subscriber,partner",
      message: "Don't spam!!!",
    },
    {
      username: "randomSubscriber",
      badges: "subscriber",
      message: "!tihwd",
    },
    {
      username: "StreamElements",
      badges: "",
      message: "This is how we do",
    },
  ],
  badgesRender: {
    subscriber: {
      type: "subscriber",
      version: "1",
      url: "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
      description: "Moderator",
    },
    broadcaster: {
      type: "broadcaster",
      version: "1",
      url: "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
      description: "Broadcaster",
    },
    partner: {
      type: "partner",
      version: "1",
      url: "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
      description: "Verified",
    },
    moderator: {
      type: "moderator",
      version: "1",
      url: "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
      description: "Moderator",
    },
    vip: {
      type: "vip",
      version: "1",
      url: "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3",
      description: "VIP",
    },
  },
};

const tchatElement = document.querySelector("#tchat");

const defaultCustomParams = {
  messageAlign: "flex-end",
  useLeftRight: false,
  positionSelf: "inherit",
  positionBroadcaster: "inherit",
  positionMod: "inherit",
  positionVip: "inherit",
  positionViewer: "inherit",
  displayTwitchBadges: true,
  hideCommands: true,
  emoteQuality: 4,
  chatHorizontalPadding: 0,
  chatVerticalPadding: 0,
  displayMessageBoxAnimation: true,
  messageBoxAnimationCycles: 8,
  botNames: "StreamElements",
  hiddenUsers: "",
  widgetAuthClientId: "",
};

let customParams = defaultCustomParams;

let totalMessages = 0;
let testMessageIndex = 0;

let channelName;

function pushTestMessage(username, badges, message, badgesRender) {
  if (username === "channelName") {
    username = channelName;
  }
  const emulated = new CustomEvent("onEventReceived", {
    detail: {
      listener: "message",
      event: {
        service: "twitch",
        data: {
          time: Date.now(),
          tags: {
            "badge-info": "",
            badges,
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
            "user-type": "mod",
          },
          nick: username,
          userId: "100135110",
          displayName: username,
          displayColor: "#5B99FF",
          badges: badgesRender,
          channel: channelName,
          text: message,
          isAction: !1,
          emotes: [
            {
              type: "twitch",
              name: "Jebaited",
              id: "114836",
              gif: !1,
              urls: {
                1: "https://static-cdn.jtvnw.net/emoticons/v2/114836/static/light/1.0",
                2: "https://static-cdn.jtvnw.net/emoticons/v2/114836/static/light/2.0",
                4: "https://static-cdn.jtvnw.net/emoticons/v2/114836/static/light/3.0",
              },
              start: 0,
              end: 6,
            },
            {
              type: "twitch",
              name: "4Head",
              id: "354",
              gif: !1,
              urls: {
                1: "https://static-cdn.jtvnw.net/emoticons/v2/354/static/light/1.0",
                2: "https://static-cdn.jtvnw.net/emoticons/v2/354/static/light/2.0",
                4: "https://static-cdn.jtvnw.net/emoticons/v2/354/static/light/3.0",
              },
              start: 0,
              end: 4,
            },
            {
              type: "ffz",
              name: "GOTTEM",
              id: "557546",
              gif: !1,
              urls: {
                1: "https://cdn.frankerfacez.com/emoticon/557546/1",
                2: "https://cdn.frankerfacez.com/emoticon/557546/2",
                4: "https://cdn.frankerfacez.com/emoticon/557546/4",
              },
              start: 46,
              end: 50,
            },
          ],
          msgId: "43285909-412c-4eee-b80d-89f72ba53142",
        },
      },
    },
  });

  window.dispatchEvent(emulated);

  emulated.detail.event.data.tags["msg-id"] = "highlighted-message";

  window.dispatchEvent(emulated);
}

function generateTestMessage() {
  testMessageIndex %= TEST_MESSAGES.message.length;

  const msg = TEST_MESSAGES.message[testMessageIndex];
  const badgesRender = [];

  if (msg.badges.length >= 1) {
    const badgeArray = msg.badges.split(",");

    badgeArray.forEach((element) => {
      badgesRender.push(TEST_MESSAGES.badgesRender[element]);
    });
  }

  testMessageIndex += 1;
  pushTestMessage(msg.username, msg.badges, msg.message, badgesRender);
}

function htmlEncode(e) {
  return e.replace(/[<>"^]/g, (c) => `&#${c.charCodeAt(0)};`);
}

function attachEmotes(message) {
  const text = htmlEncode(message.text);
  const data = message.emotes;

  let isEmoteOnly = true;
  const splits = text.split(/(\s+)/);

  const render = $('<div class="message-line"></div>');
  let prevEmote;
  let textBuffer = "";

  splits.forEach((key) => {
    if (key.length === 0) return;
    if (key === " " && prevEmote !== undefined) return;

    const result = data.filter((emote) => htmlEncode(emote.name) === key);

    if (typeof result[0] !== "undefined") {
      if (textBuffer.length > 0) {
        const elem = $.parseHTML(
          `<span class="text-fragment">${textBuffer}</span>`
        );
        render.append(elem);
        textBuffer = "";
      }

      const url = result[0].urls[customParams.emoteQuality];

      const emot = $.parseHTML(
        `<span class="emote-fragment"><img class="emote" src="${url}"/></span>`
      );
      if (prevEmote !== undefined) {
        $(render).append(prevEmote);
      }
      prevEmote = emot;
    } else {
      isEmoteOnly = false;
      if (prevEmote !== undefined) {
        render.append(prevEmote);
        prevEmote = undefined;
      }
      textBuffer += (textBuffer.length > 1 ? "" : " ") + key;
    }
  });

  if (prevEmote !== undefined) {
    render.append(prevEmote);
  }
  if (textBuffer.length > 0) {
    const elem = $.parseHTML(
      `<span class="text-fragment">${textBuffer}</span>`
    );
    render.append(elem);
    textBuffer = "";
  }

  const r = {
    renderedText: render,
    isEmoteOnly,
  };
  return r;
}

function getMessagePosition(customParamsPosition, contextPosition) {
  return customParamsPosition !== "inherit"
    ? customParamsPosition
    : contextPosition;
}

// bot > highlight > modo > vip > 1er message > t3 > t2 > t1 > normal
function addMessage(
  username,
  badges,
  message,
  messageText,
  isAction,
  uid,
  msgId,
  role,
  isHighlight,
  isArtist,
  subBadge,
  bitsBadge,
  isEmoteOnly
) {
  // for local dev
  tchatElement.style.setProperty("--align", customParams.messageAlign);
  tchatElement.style.setProperty(
    "--vertical-padding",
    `${customParams.chatVerticalPadding}px`
  );
  tchatElement.style.setProperty(
    "--horizontal-padding",
    `${customParams.chatHorizontalPadding}px`
  );
  //  end

  let variant = ASSETS.NORMAL;
  let position = "inherit";
  totalMessages += 1;

  if (customParams.useLeftRight) {
    position = totalMessages % 2 === 0 ? "flex-start" : "flex-end";
  }

  if (role === ROLES.BOT) {
    variant = ASSETS.BOT;
  } else if (isHighlight) {
    variant = ASSETS.HIGHLIGHT;
  } else if (role === ROLES.BROADCASTER) {
    position = getMessagePosition(
      username !== channelName
        ? customParams.positionBroadcaster
        : customParams.positionSelf,
      position
    );
  } else if (role === ROLES.MODERATOR) {
    variant = ASSETS.MODERATOR;
    position = getMessagePosition(customParams.positionMod, position);
  } else if (role === ROLES.VIP) {
    variant = ASSETS.VIP;
    position = getMessagePosition(customParams.positionVip, position);
  } else if (role === ROLES.SUBSCRIBER) {
    const subTier = SUBS[username.toLocaleLowerCase()];
    variant = ASSETS[subTier] || ASSETS.T1;
    position = getMessagePosition(customParams.positionViewer, position);
  }

  tchatElement.insertAdjacentHTML(
    "beforeend",
    `<div 
      id="message-${msgId}" 
      data-sender="${uid}" 
      class="message ${isHighlight ? "full" : ""}" 
      style="--color:${variant.MSG_COLOR}; --position:${position}"
    >
      <div class="name-container" style="--banner:url(${
        variant.BANNER
      }); --color:${variant.NAME_COLOR}">
        <img src="${variant.SCROLL}" class="scroll" />
        <div class="meta">
          ${subBadge || ""}
          ${bitsBadge || ""}
          <div class="badges">${badges}</div>
          <div class="name">${username}</div>
        </div>
        <img src="${variant.SCROLL}" class="scroll" />
      </div>
      <div class="content ${isEmoteOnly ? "emote-only" : ""}"></div>
      <img 
        src="${variant.BOX}" 
        class="message-box ${
          customParams.displayMessageBoxAnimation ? "animated" : ""
        }"
        style="--animation-cycles: ${customParams.messageBoxAnimationCycles};"
      />
    </div>`
  );
  const contents = document.querySelectorAll(".content");

  for (let i = 0; i < message.length; i += 1) {
    contents[contents.length - 1].insertAdjacentElement(
      "beforeend",
      message[i]
    );
  }

  const messages = document.querySelectorAll(".message");
  const messageCount = messages.length;

  if (messageCount > MAX_DISPLAYABLE_MESSAGES) {
    Array.from(messages)
      .slice(0, messageCount - MAX_DISPLAYABLE_MESSAGES)
      .forEach((msg) => msg.remove());
  }
}

/**
 *  follower-latest - New Follower
    subscriber-latest - New Subscriber
    host-latest - New host
    cheer-latest - New cheer
    tip-latest - New tip
    raid-latest - New raid
    message - New chat message received
    delete-message - Chat message removed
    delete-messages - Chat messages by userId removed
    widget-button - User clicked custom field button in widget properties
 */
window.addEventListener("onEventReceived", (obj) => {
  if (obj.detail.event.listener === "widget-button") {
    if (obj.detail.event.field === "testMessage") {
      generateTestMessage();
    }
    return;
  }
  if (obj.detail.listener === "delete-message") {
    const { msgId } = obj.detail.event;
    document
      .querySelectorAll(`#message-${msgId}`)
      .forEach((msg) => msg.remove());
    return;
  }
  if (obj.detail.listener === "delete-messages") {
    const sender = obj.detail.event.userId;
    document
      .querySelectorAll(`.message[data-sender${sender}]`)
      .forEach((msg) => msg.remove());
    return;
  }
  if (obj.detail.listener === "subscriber-latest") {
    const subData = obj.detail.event;
    SUBS[subData.name.toLocaleLowerCase()] = `T${
      Math.floor(subData.tier / 1000) || 1
    }`;
  }

  if (obj.detail.listener !== "message") return;

  const { data } = obj.detail.event;

  if (data.text.startsWith("!") && customParams.hideCommands) return;
  if (customParams.hiddenUsers.indexOf(data.nick) !== -1) return;

  const render = attachEmotes(data);
  const message = render.renderedText;
  const { isEmoteOnly } = render;
  const messageText = data.text;
  let badges = "";

  let role = "";
  let subBadge = "";
  let bitsBadge = "";
  const isArtist = false;

  if (customParams.botNames.indexOf(data.nick) !== -1) {
    role = ROLES.BOT;
  } else if (data.tags.badges) {
    if (data.tags.badges.includes("broadcaster")) {
      role = ROLES.BROADCASTER;
    } else if (data.tags.badges.includes("mod")) {
      role = ROLES.MODERATOR;
    } else if (data.tags.badges.includes("vip")) {
      role = ROLES.VIP;
    } else if (
      data.tags.badges.includes("subscriber") ||
      data.tags.badges.includes("founder")
    ) {
      role = ROLES.SUBSCRIBER;
    }
  }

  data.badges.forEach((badge) => {
    if (badge.type === "bits") {
      bitsBadge = `<img src="${badge.url}" class="bits-badge" />`;
    }
    if (badge.type === "subscriber" || badge.type === "founder") {
      subBadge = `<img src="${badge.url}" class="sub-badge" />`;
    }

    if (
      customParams.displayTwitchBadges &&
      TWITCH_BADGES.includes(badge.type)
    ) {
      badges += `<img src="${badge.url}" class="badge" />`;
    }
  });

  const username = data.displayName;

  const isHighlight = data.tags["msg-id"] === "highlighted-message";

  addMessage(
    username,
    badges,
    message,
    messageText,
    data.isAction,
    data.userId,
    data.msgId,
    role,
    isHighlight,
    isArtist,
    subBadge,
    bitsBadge,
    isEmoteOnly
  );
});

async function loadSubs(channelId, pagination) {
  // fetch(`https://api.twitch.tv/helix/chat/badges?broadcaster_id=${channelId}`, {
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer ${customParams.userAccessToken}`,
  //     "Client-Id": CUSTOM_APP_CLIENT_ID,
  //   },
  // });
  const response = await fetch(
    `https://api.twitch.tv/helix/subscriptions?broadcaster_id=${channelId}&first=100&after=${
      pagination.cursor ? `&after=${pagination.cursor}` : ""
    }`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${customParams.userAccessToken}`,
        "Client-Id": CUSTOM_APP_CLIENT_ID,
      },
    }
  );
  const subs = await response.json();

  subs.data.forEach((sub) => {
    SUBS[sub.user_nam.toLocaleLowerCase()] = `T${Math.floor(sub.tier / 1000)}`;
  });

  if (Object.keys(subs.pagination).length > 0) {
    loadSubs(channelId, subs.pagination);
  }

  console.log("subs", SUBS);
}

window.addEventListener("onWidgetLoad", async (obj) => {
  const receivedCustomParams = obj.detail.fieldData;

  customParams = receivedCustomParams;

  console.log(obj.detail);

  if (customParams.userAccessToken) {
    loadSubs(obj.detail.channel.providerId, {});
  }

  channelName = obj.detail.channel.username;

  tchatElement.style.setProperty("--align", customParams.messageAlign);
  tchatElement.style.setProperty(
    "--vertical-padding",
    `${customParams.chatVerticalPadding}px`
  );
  tchatElement.style.setProperty(
    "--horizontal-padding",
    `${customParams.chatHorizontalPadding}px`
  );
});
