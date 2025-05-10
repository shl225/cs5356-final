// possible_questions = [
//     "What are some steps I can follow in case of a hurricane?",
//     "Are there any resources available to help elderly or disabled individuals during emergencies?",
//     "Do you have any tips for protecting my home from flooding?",
//     "Where can I seek shelter during a tornado?",
//     "What should I do if I see a wildfire?",
//     "What can I prepare for in case of a power outage?",
//     "How can I prepare for a winter storm?",
//     "I am outside during a thunderstorm. What should I do?",
//     "What is the best way to avoid my home flooding during hurricane season?",
//     "Who can I call if I need help during a natural disaster?",
//     "What should I do if I see a tornado?",
//     "What types of things do I pack in my first aid kit for emergencies?",
//     "Are there any resources available to help me prepare for a hurricane or other natural disasters?"
// ]

var chatbot_name = "DataPowered AI";

function autoHeight(event) {
    /*For our TextArea Input*/
    const elem = event.srcElement;
    /* let the textarea grow to the required size */
    elem.style.height = "auto";
    /* save the original border/padding values */
    const padding = elem.style.padding;
    const border = elem.style.border;
    /* without this rows="1" resizes when you start typing */
    elem.style.padding = 0;
    elem.style.border = "medium solid black";
    /* adjust the height of the textarea */
    elem.style.height = elem.scrollHeight + "px";
    /* restore the original border/padding values */
    elem.style.padding = padding;
    elem.style.border = border;
}

console.log("HELLO!!!!!!")

// function randBtns() {
//     var btns = document.getElementsByClassName("btn");
//     var possible_questions_temp = [];
//     for (var i = 0; i < possible_questions.length; i++) {
//         possible_questions_temp.push(possible_questions[i]);
//     }
//     for (var i = 0; i < btns.length; i++) {
//         question = possible_questions_temp[Math.floor(Math.random() * possible_questions_temp.length)];
//         if (i == 0 || i == 1) {
//             while (question.length < 63) {
//                 question = possible_questions_temp[Math.floor(Math.random() * possible_questions_temp.length)];
//             }
//         }
//         if (i == 2) {
//             while (question.length > 63) {
//                 question = possible_questions_temp[Math.floor(Math.random() * possible_questions_temp.length)];
//             }
//         }
//         btns[i].innerHTML = '"' + question + '" →';
//         possible_questions_temp.splice(possible_questions_temp.indexOf(btns[i].innerHTML.split('"')[1].split('"')[0]), 1);
//     }
// }

// randBtns();

function addBtnMessage(button) {
    //if the first character is "
    if (button.innerHTML[0] == '"') {
        //remove the first and last character
        buttontext = button.innerHTML.split('"')[1].split('"')[0];
    }
    else {
        buttontext = button.innerHTML;
        //remove anything that starts with <svg
        buttontext = buttontext.split("<svg")[0];
    }
    document.getElementById("dp-chatbot-text").value = buttontext;
}

var settingspopup = document.createElement("div");
settingspopup.innerHTML = `
    <div id="settingspopup" style="display: none; position: fixed; z-index: 99; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);">
        <div style="background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%;">
            <span class="close" style="color: #aaaaaa; float: right; font-size: 28px; font-weight: bold;">&times;</span>
            <h2>Settings</h2>
        </div>
    </div>
`;
settingspopup.innerHTML = `
    <div id="settingspopup" style="display: none; position: fixed; z-index: 99; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);">
        <div style="background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%; max-width:350px; border-radius:5px;">
            <span class="close" style="color: #aaaaaa; float: right; font-size: 28px; font-weight: bold;">&times;</span>
            <h2 style="font-size:larger; font-weight: bold; margin-top: 5px;">Settings</h2>
            
            <p style="font-size: small; margin-top: 40px; font-style: italic; text-align: center;">Settings coming soon</p>

            <!-- Report a bug -->
            <div style="/*display: flex; flex-direction: column;*/ margin-top: inherit;">
                <label for="darkmode" style="font-size: medium;">Report a bug</label>
                <label class="switch">
                    <!-- Email button -->
                    <a href="mailto:support@austindigitaltwin.com?subject=Bug Report&body=Please describe the bug here.">
                    <i class="fa fa-envelope fa-fw" id="emailbug"></i>
                    </a>
                </label>
                <p style="font-size: small; margin-top: 5px;">Report a bug by clicking this button. You will be redirected to your email client.</p>
            </div>

        </div>
    </div>
`;
document.body.appendChild(settingspopup);
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("settingspopup").style.display = "none";
};
document.getElementsByClassName("close")[0].onmouseover = function() {document.getElementsByClassName("close")[0].style.cursor = "pointer";};
// document.getElementById("settings").onclick = function() {
//     document.getElementById("settingspopup").style.display = "block";
// };
window.onclick = function(event) {
    if (document.getElementById("settingspopup").style.display == "block" && event.target == document.getElementById("settingspopup")) {
        document.getElementById("settingspopup").style.display = "none";
    }
};
// document.getElementsByClassName("wrap")[0].onclick = function() {window.location.href = "https://emergency.austindigitaltwin.com/";};
// document.getElementsByClassName("wrap")[0].onmouseover = function() {document.getElementsByClassName("wrap")[0].style.cursor = "pointer";};

//fix for hover of infobtns
document.querySelectorAll(".btn").forEach(item => {
    item.addEventListener("mouseover", function() {
        item.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        item.style.cursor = "pointer";
    });
    item.addEventListener("mouseout", function() {
        item.style.backgroundColor = "#fff";
    });
});

// set channels thread safe
var channels = null;
var lstChannels = [];
var curChannel = null;
var counter = 0;
//localStorage.channels = "{}";
function setChannel(name, channel) {
    getChannels()[name] = channel;
    localStorage.channels = JSON.stringify(getChannels());
    //append the channel dict to the list of channels
    lstChannels.push(channel);
}

function getChannels() {
    if (channels)
        return channels;

    if (localStorage.channels)
        channels = JSON.parse(localStorage.channels)
    else {
        channels = {};
        localStorage.channels = "{}"; // store string of object
    }

    return channels;
}

function delChannel(name) {
    console.log("Deleting channel: " + name)
    console.log("before: ", getChannels())
    delete getChannels()[name];
    console.log("after: ", getChannels())
    localStorage.channels = JSON.stringify(getChannels());
    lstChannels = lstChannels.filter(function (channel) {
        return channel.name != name;
    });
    updateChannels(lstChannels);

    messagesScreen = document.getElementsByClassName("messages")[0];
    messagesScreen.getElementsByTagName("ul")[0].innerHTML = "";
    document.getElementById("info").style.display = "block";
    curChannel = null;

    if (lstChannels.length == 0) {
        counter = 0;
        localStorage.setItem("counter", counter);
    }
}

function searchChannels(input) {
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("channelContacts");
    var li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        var p = li[i].getElementsByTagName("p")[0];
        if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function toggleRenameChannel(name) {
    console.log("Setting channel to renamable")
    //Setting the inside of p with id p${name} to be editable
    var renameP = document.getElementById(`p${name}`);
    renameP.contentEditable = true;
    renameP.focus();
    //Setting cursor to end of text
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(renameP.childNodes[0], renameP.innerText.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    //When person leaves the textbox
    renameP.onblur = function () {
        renameP.contentEditable = false;
        var newName = renameP.innerText;
        console.log("Changed channel name to: " + newName);
        var channel = getChannels()[name];
        console.log("Channel: ", channel)
        channel.dname = newName;
        console.log("New Channel: ", channel)
        console.log(lstChannels)
        //Replace the channel in the list of channels
        lstChannels = lstChannels.map(function (channel) {
            if (channel.name == name) {
                channel.dname = newName;
            }
            return channel;
        });
        //update the local storage
        updateChannels(lstChannels);
        renameToLocalStorage(newName);
    }
    //When person presses enter key
    renameP.onkeydown = function (e) {
        if (e.keyCode == 13) {
            renameP.blur();
        }
    }

}

function renameToLocalStorage(rename) {
    var curChannel1 = localStorage.getItem("channels");
    var curChannel1json = JSON.parse(curChannel1);
    var curChannelcontents = curChannel1json[curChannel];

    //update localstorage with new name
    curChannelcontents.dname = rename;
    localStorage.setItem("channels", JSON.stringify(curChannel1json));
    console.log("Renamed to " + rename);
}

function clearSelected() {
    //Clearing the backgrounds of all channels
    var channels = getChannels();
    for (var channel in channels) {
        var channelDiv = document.getElementById(`${channel}`);
        channelDiv.style.backgroundColor = "";
        var channelP = document.getElementById(`p${channel}`);
        var channelIconRename = channelP.parentElement.children[1];
        var channelIconDelete = channelP.parentElement.children[2];
        channelIconRename.style.visibility = "hidden";
        channelIconDelete.style.visibility = "hidden";
    }
    //getting rid of suggestions
    document.getElementById("suggestions").innerHTML = "";
}

function setSelected(cname) {
    // clearSelected();
    //Setting the background of the selected channel
    var channel = getChannels()[cname];
    var channelDiv = document.getElementById(`${cname}`);
    channelDiv.style.backgroundColor = "#c72b5c";
    console.log("Selected channel: " + cname);
    var channelP = document.getElementById(`p${cname}`);
    var channelIconRename = channelP.parentElement.children[1];
    var channelIconDelete = channelP.parentElement.children[2];
    
    //if not mobile
    if (window.innerWidth > 600) {
        channelIconRename.style.visibility = "visible";
        channelIconDelete.style.visibility = "visible";
    }
    //channelIconRename.style.visibility = "visible";
    //channelIconDelete.style.visibility = "visible";
    
    //Setting the current channel to the selected channel
    curChannel = cname;

    localStorage.setItem("selectedChannel", cname);
    localStorage.setItem("counter", counter);

    //There is a small bug where it sets the wrong channel to be selected by 1 off (i.e. if you select channel 2, it will say it selected channel 3?)
    //TODO: Fix this bug

}

function isSelected(cname) {
    var channel = getChannels()[cname];
    var channelDiv = document.getElementById(`${cname}`);
    if (channelDiv.style.backgroundColor == "#c72b5c") {
        return true;
    }
    return false;
}

var prevrannum = 0;
var prevchannel = "";
function reqChatBy(cname) {
    clearSuggestions();
    insurvey = false;
    //if cname is curChannel, do nothing
    // if (cname == curChannel) {
    // 	return;
    // }

    // setSelected(cname);
    //Display the channel's messages on the right and hide the previous channel's messages
    
    //Hide the previous channel's messages
    var channels = getChannels();
    var messagesScreen = document.getElementsByClassName("messages")[0];

    //if info is visible, hide it
    if (document.getElementById("info").style.display != "none") {
        document.getElementById("info").style.display = "none";
    }

    //wipe the messages screen
    messagesScreen.getElementsByTagName("ul")[0].innerHTML = "";

    //call userText and chatText functions to display messages from the channel
    //lstChannels channel will have all the messages with human first then bot
    for (var i = 0; i < lstChannels.length; i++) {
        if (lstChannels[i].name == cname) {
            //if lstChannels[cname] messages is empty, show info
            if (lstChannels[i].messages.length == 0) {
                document.getElementById("info").style.display = "block";
            }
            //random number between 1 and 40 for the avatar (old code for random avatar each time)
            // if (cname != prevchannel) {
            //     rannum = Math.floor(Math.random() * 40) + 1;
            //     prevrannum = rannum;
            // }
            // else {
            //     rannum = prevrannum;
            // }
            //new code that loads in avatar for specific conversation if it exists, if not, it will load in a random avatar
            if (lstChannels[i].avatar != undefined) {
                rannum = lstChannels[i].avatar.split("new_grid/")[1].split(".")[0];
                prevrannum = rannum;
            }
            else if (cname != prevchannel) {
                rannum = Math.floor(Math.random() * 3) + 1;
                prevrannum = rannum;
                //Save our avatar to the cookie
                // lstChannels[i].avatar = "img/new_grid/" + rannum + ".png";
                lstChannels[i].avatar = "../img/bot.png";
                // var curChannel1 = localStorage.getItem("channels");
                // var curChannel1json = JSON.parse(curChannel1);
                // var curChannelcontents = curChannel1json[curChannel];
                // // curChannelcontents.avatar = "img/new_grid/" + rannum + ".png";
                // curChannelcontents.avatar = "img/bot.png";
            }
            else {
                rannum = prevrannum;
                //Save our avatar to the cookie
                // lstChannels[i].avatar = "img/new_grid/" + rannum + ".png";
                lstChannels[i].avatar = "../img/bot.png";
                // var curChannel1 = localStorage.getItem("channels");
                // var curChannel1json = JSON.parse(curChannel1);
                // var curChannelcontents = curChannel1json[curChannel];
                // // curChannelcontents.avatar = "img/new_grid/" + rannum + ".png";
                // curChannelcontents.avatar = "img/bot.png";
            }

            for (var j = 0; j < lstChannels[i].messages.length; j++) {
                if (j % 2 == 0) {
                    userText(lstChannels[i].messages[j]);
                } else {
                    chatText(lstChannels[i].messages[j], rannum);
                }
            }
        }
    }



    function userText(message) {
        //Getting rid of the 45px margin on the last reply
        var replies = document.getElementsByClassName("replies");
        for (var i = 0; i < replies.length; i++) {
            replies[i].style.marginBottom = "";
        }
        //Getting rid of the 45px margin on the last reply

        var data = {};
        data.state = "sent";
        data.avatar = "../img/user.png";
        data.name = "You";
        data.msgHeader = "You";
        data.msg = message;
        messagesScreen.getElementsByTagName("ul")[0].innerHTML += `<li class="${data.state}"><img src="${data.avatar}" title="${data.name}" style="scale: 2; margin-right: -40px;" /><p><b>${data.msgHeader}</b><br>${data.msg}</p></li>`;
        messagesScreen.getElementsByTagName("ul")[0].innerHTML += `<li class="${data.state}" style="display: flex;
        flex-direction: row-reverse;"><img src="${data.avatar}" title="${data.name}" style="object-fit: contain;
        min-width: 40px;
        object-position: top;
        overflow: inherit;" /><p><b style="font-weight: 600;">${data.msgHeader}</b><br>${data.msg}</p></li>`;
    }

    function chatText(message, avatarnum = 0) {
        var data = {};
        data.state = "replies";
        //Regular avatars
        if (avatarnum == 0) {
            data.avatar = "../img/bot.png";
        }
        //Randomized avatars
        else {
            // data.avatar = "img/new_grid/" + avatarnum + ".png";
            data.avatar = "../img/bot.png";
        }

        data.name = chatbot_name;
        data.msgHeader = chatbot_name;
        data.msg = message;
        //suggestions
        //Loading in old suggestions
        try {
            if (data.msg.includes("suggestions:")) {
                suggestionslist = data.msg.split("suggestions:")[1];
                data.msg = data.msg.split("suggestions:")[0];
                //Get the suggestions
                //console.log("Suggestions: " + suggestionslist);
                suggestionslist = suggestionslist.toString();
                //Suggestions is an array
                suggestionslist = JSON.parse(suggestionslist);
                //Add the suggestions to the possible_questions array
            }
        }
        catch {
            //console.log("No suggestions in this message");
            data.msg = message;
        }

        function stripHtml(htmlString) {
            // This regex matches any HTML tags and removes them
            const plainText = htmlString.replace(/<[^>]*>/g, '');
            // This regex matches any brackets with numbers inside and removes them ex. [1]
            const plainText2 = plainText.replace(/\[\d\]/g, '');
            const trimmedText = plainText2.trim();
            return trimmedText;
        }
        safemsg = stripHtml(data.msg);
        
        data.btns = `<div class=\"btnctrl\" style=\"
            position: relative;
        \"><div style="
        position: absolute;
        width: 150px;
        height: 30px;
        left: 23px;
    "></div><img class=\"chatbtn\" onclick="copyReply(\`` + safemsg + `\`)" src=\"https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/6c01ee77-15dd-446b-a783-736a1c2d3598" style=\"
            position: absolute;
            cursor: pointer;
            scale: 1.15;
            left: 97px;
            bottom: -20px;
            border-radius: 0;
            filter: brightness(0.65);
        \"><img class=\"chatbtn\" onclick="rate_response(\`` + safemsg + `\`,0)" src=\"https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/a4c76f2b-9d7a-401c-bc19-fa840c83f294" style=\" 
            position: absolute;
            cursor: pointer;
            scale: 1;
            left: 70px;
            bottom: -20px;
            border-radius: 0;
            filter: brightness(0.65);
        \"><img class=\"chatbtn\" onclick="rate_response(\`` + safemsg + `\`,1)" src=\"https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/fb4ff1d4-e1b4-496d-8367-bbd008cdfe39" style=\"
            position: absolute;
            cursor: pointer;
            scale: 1;
            left: 43px;
            bottom: -20px;
            border-radius: 0;
            filter: brightness(0.65);
        \"></div>`;
        messagesScreen.getElementsByTagName("ul")[0].innerHTML += `<li class="${data.state}"><div style="display: flex; width: 100%;"><img src="${data.avatar}" title="${data.name}" style="object-fit: contain;
        min-width: 40px;
        object-position: top;
        overflow: inherit;" /><p><b style="font-weight: 600;">${data.msgHeader}</b><br>${data.msg}</p></div>${data.btns}</li>`;


        //Organize the suggestions list from longest to shortest
        suggestionslist.sort(function(a, b) {
            return b.length - a.length;
        });
        //Adding suggestions, if any
        //if there are suggestions, add them
        for (var i = 0; i < suggestionslist.length; i++) {
            addSuggestion(suggestionslist[i]);
            //console.log("Adding suggestion: " + suggestionslist[i]);
        }
        suggestionslist = [];
        //set id suggestions to display flex
        document.getElementById("suggestions").style.display = "flex";

    }
    updateLastReplies();
    prevchannel = cname;
    return
}

function redoReply() {
    /*Delete the last reply and the last sent, but make sure to save the last sent to the text box and submit it*/
    //Just the last item in the page with class "replies" and the last item in the page with class "sent"
    var lastReply = document.getElementsByClassName("replies")[document.getElementsByClassName("replies").length - 1];
    var lastSent = document.getElementsByClassName("sent")[document.getElementsByClassName("sent").length - 1];
    lastReply.remove();
    lastSent.remove();
    document.getElementById("dp-chatbot-text").value = lastSent.getElementsByTagName("p")[0].innerText.split("You")[1];

    //We also need to remove the last reply and the last sent from the localstorage
    // var curChannel1 = localStorage.getItem("channels");
    // var curChannel1json = JSON.parse(curChannel1);
    // var curChannelcontents = curChannel1json[curChannel];
    // curChannelcontents.messages.pop();
    // curChannelcontents.messages.pop();
    // localStorage.setItem("channels", JSON.stringify(curChannel1json));
    //submitting the form
    //document.getElementById("form").submit(); //Reloads the page and doesn't work
    document.getElementById("form").onsubmit(event); //So we'll directly call it with a pseudo event
    //Showing the loader
    //document.getElementById("loader").style.visibility = "visible";
    //Updating the styles
    updateLastReplies(true);

    //Keep the page scrolled to the bottom
    chat = document.getElementById("chat");
    chat.scrollTop = chat.scrollHeight;
}



function copyReply(message) {
    var text = message;
    try {
        navigator.clipboard.writeText(text).then(function() { console.log('Async: Copying to clipboard was successful!'); }, function(err) { console.error('Async: Could not copy text: ', err); });
    }
    catch {
        console.log("Reverting to fallback method");
        var text = message;
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    }
}

function updateLastReplies(allNeg = false) {
    /*Only the last reply should have the style     margin-bottom: 25px;*/ 
    /*Every other reply will have its style cleared*/
    var replies = document.getElementsByClassName("replies");
    for (var i = 0; i < replies.length; i++) {
        replies[i].style.marginBottom = "";
    }
    //We need to remove the last child of class="btnctrl" from all replies that dont have the custom tag "noredo". Not including the most recent reply.
    var btnctrls = document.getElementsByClassName("btnctrl");
    for (var i = 0; i < btnctrls.length - 1; i++) {
        if (!btnctrls[i].hasAttribute("noredo")) {
            btnctrls[i].removeChild(btnctrls[i].lastChild);
            //give it the noredo tag so that we dont remove it again
            btnctrls[i].setAttribute("noredo", "");
        }
    }

    // if (replies.length > 0 && !allNeg) {
    //     replies[replies.length - 1].style.marginBottom = "45px";
        //Add <img onclick="redoReply()" src=\"https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/618f418b-efa1-438a-b7df-0b184f03b536" style=\"
        //     position: absolute;
        //     cursor: pointer;
        //     scale: 0.8;
        //     left: 125px;
        //     bottom: -25px;
        //     border-radius: 0;
        //     filter: brightness(0.7);
        // \"> to the last reply as the first child of the first div inside of it
        // var img = document.createElement("img");
        // img.onclick = redoReply;
        // img.src = "https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/618f418b-efa1-438a-b7df-0b184f03b536";
        // img.className = "chatbtn";
        // // img.style.position = "absolute";
        // img.style.cursor = "pointer";
        // // img.style.scale = "0.8";
        // img.style.scale = "0.65";
        // // img.style.left = "125px";
        // // img.style.bottom = "-20px";
        // img.style.borderRadius = "0";
        // img.style.filter = "brightness(0.7)";
        // img.style.margin = "0";
        // img.style.objectFit = "contain";
        // console.log("Attaching image to the reply:", replies[replies.length - 1]);
        // //Attach as second child
        // replies[replies.length - 1].getElementsByTagName("div")[0].appendChild(img);
    // }
}

function getChannelLink(channel) {
    return `<div class='wrap' onclick='reqChatBy("${channel.name}")'>				
            <i class="fa fa-comment fa-fw" aria-hidden="true" style="
                width: 40px;
                border-radius: 50%;
                float: left;
                margin-right: 10px;
                margin-top: 12px;
            "></i>
                <div class='wait'></div>
                <div class='meta' style="display: flex;">
                    <p id='p${channel.name}' class='name badge' data-badge=''>${channel.dname}</p>
                    <i class="fa fa-pencil fa-fw" aria-hidden="true" onclick="toggleRenameChannel('${channel.name}')" style="
                        width: 40px;
                        border-radius: 50%;
                        float: right;
                        margin-right: 10px;
                        margin-top: 9px;
                        position: absolute;
                        right: 5%;
                        visibility: hidden;
                    "></i>
                        <i class="fa fa-trash fa-fw" aria-hidden="true" onclick="delChannel('${channel.name}')" style="
                        width: 40px;
                        border-radius: 50%;
                        float: right;
                        margin-right: 10px;
                        margin-top: 9px;
                        position: absolute;
                        right: -5%;
                        visibility: hidden;
                    "></i>
                </div>
            </div>`;
}

function updateChannels(lstChannels) {
    var channelContacts = document.getElementById("channelContacts");
    channelContacts.innerHTML = "";
    for (var i = 0; i < lstChannels.length; i++) {
        var channel = lstChannels[i];
        channelContacts.innerHTML += "<li id='" + channel.name + "' class='contact'>" + getChannelLink(channel) + "</li>"
    };
}

function newChannel() {
    var name = "channel" + counter;
    counter++;
    console.log("adding channel " + name)
    var channel = {
        dname: "Conversation " + counter.toString(),
        name: name,
        messages: []
    };
    setChannel(name, channel);
    // updateChannels(lstChannels);
    // setSelected(name);
    reqChatBy(name);
    // randBtns();
}		


// Adding conversation on left side
//if localstorage counter is null, set it to 0
if (localStorage.getItem("counter") == null) {
    localStorage.setItem("counter", 0);
    counter = 0;
}
else {
    counter = localStorage.getItem("counter");
}

//If the size of channels is greater than counter, set counter to be the size of channels
// if (localStorage.getItem("channels") != "{}") {
//     var channels = getChannels();
//     if (Object.keys(channels).length > counter) {
//         counter = Object.keys(channels).length;
//         localStorage.setItem("counter", counter);
//     }
// }

// var addcbtn = document.getElementById("addchannel");
// addcbtn.onclick = function () {
//     newChannel();
// }			

//suggestions
var suggestionslist = [];
//survey
var insurvey = false;

sent_text = ""
window.onload = function() {
    const form = document.getElementById('form');
    var chatResponse = '';
    form.onsubmit = function(e) {
        e.preventDefault();

        //For our conversationality, set the form's curChannel to curChannel variable
        //if form.curChannel doesn't exist, create it
        if (document.getElementById("curChannel") == null) {
            var input = document.createElement("input");
            input.type = "hidden";
            input.id = "curChannel";
            input.name = "curChannel";
            form.appendChild(input);
        }
        form.curChannel.value = curChannel;
        //if form.curChannelHistory doesn't exist, create it
        if (document.getElementById("curChannelHistory") == null) {
            var input = document.createElement("input");
            input.type = "hidden";
            input.id = "curChannelHistory";
            input.name = "curChannelHistory";
            form.appendChild(input);
        }
        try {
            //get the messages array from the curChannel in localstorage
            console.log("TRYING TO GET MESSAGES FROM " + curChannel)
            var curChannel1 = localStorage.getItem("channels");
            var curChannel1json = JSON.parse(curChannel1);
            var curChannelcontents = curChannel1json[curChannel];
            console.log(curChannelcontents);
            console.log(curChannelcontents.messages);
            console.log("--------------------")
            var curHistoryMessages = curChannelcontents.messages;
        }
        catch {
            //if it doesn't exist, set it to an empty array
            var curHistoryMessages = [];
        }
        //set the form's curChannelHistory to the messages array
        form.curChannelHistory.value = JSON.stringify(curHistoryMessages);
        //curHistoryMessages should only contain the last 4 messages
        curHistoryMessages = curHistoryMessages.slice(-4);

        //if text is nothing, do nothing
        if (document.getElementById("dp-chatbot-text").value == "") {
            return;
        }
        

        //if not the first message
        if (document.getElementsByClassName("messages")[0].getElementsByTagName("ul")[0].innerHTML != "") {
            //don't allow person to submit new text until last element in messages is "replies"
            //if isAnimating
            if (isAnimating) {
                return;
            }
            var lastElement = document.getElementsByClassName("messages")[0].getElementsByTagName("ul")[0].lastElementChild;
            if (lastElement.className != "replies") {
                return;
            }
        }

        //A message is being sent, so we log it with our Analytics
        //gtag
        try {
            gtag('event', 'sendMessage', {
                'event_category': 'AI Interaction',
                'event_label': 'Submit Query',
                'value': 1  // Optional, if you want to quantify each submission
                });
        } catch (error) {
            console.error('Failed to track in Google Analytics:', error);
        }
        //matomo
        try {
            _paq.push(['trackEvent', 'Emergency', 'Emergency_Send_Message', document.getElementById("dp-chatbot-text").value]);
        } catch (error) {
            console.error('Failed to track in Matomo:', error);
        }
        
        
        //===========

        //set innerhtml of suggestions to nothing
        document.getElementById("suggestions").innerHTML = "";

        //set id suggestions to display none
        document.getElementById("suggestions").style.display = "none";

        //===========

        //Getting rid of redos
        //Enable the redo button, which will be the last child of the last class="btnctrl"
        //if btnctrl exists
        if (document.getElementsByClassName("btnctrl").length > 0) {
            //get the last redobtn that has 4 children
            var buttons = Array.from(document.getElementsByClassName("btnctrl"));
            var redoBtn = buttons.reverse().find(btn => btn.children.length === 4)?.lastChild;
            if (redoBtn) {
                redoBtn.style.visibility = "hidden";
            }
        }

        text();
        console.log('form submitted');
        //fetch('https://api.austindigitaltwin.com/endpoint?q=' + sent_text + '&curChannel=' + curChannel + '&curChannelHistory=' + JSON.stringify(curHistoryMessages))
        //fetch('https://apiemergency.austindigitaltwin.com/?q=' + sent_text)// + '&curChannel=' + curChannel + '&curChannelHistory=' + JSON.stringify(curHistoryMessages))
        
        console.log("Sent text: " + sent_text);
        //only set sessionid if sent_text == "survey". Otherwise, set it to ""
        if (sent_text == "survey" || insurvey) {
            //LocalStorage has the session_id
            sessionid = localStorage.getItem("session_id");
            insurvey = true;
        }
        else {
            sessionid = "";
        }
        
        //fetch('https://apiemergency.austindigitaltwin.com', {
        fetch('https://api.datapowered.ai/query', {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    m: curConfig.id,
                    q: sent_text,
                    s: sessionid,
                    h: JSON.stringify(curHistoryMessages),
                    u: true
                })
            })
            
        // .then(response => response.json())
        // .then(data => console.log('Response:', data))
        // .catch(error => console.error('Error:', error));
            //get html text from response
            // .then(response => {
            //     if (!response.ok) {
            //         throw new Error('Network response was not ok ' + response.statusText);
            //     }
            //     return response.text();
            // })
            .then(response => {
                try {
                    response = response.json();
                    //if error in response json
                    if (response.error) {
                        console.log('Error:', response.error);
                        throw new Error('Network response was not ok ' + response.error);
                    }
                    return response;
                }
                catch {
                    console.log('Error:', response);
                    throw new Error('Network response was not ok ' + response);
                }
            })
            //save data to variable
            .then(data => {
                sessionid = data.session_id;
                console.log('Response:', data);
                data = data.answer;
                console.log("Answer: " + data);
                console.log("Session id: " + sessionid);
                //if sessionid is null, none, or empty, undefined set insurvey to false
                if (sessionid == null || sessionid == "None" || sessionid == "" || sessionid == undefined) {
                    insurvey = false;
                }

                console.log(data);
                chatResponse = data;

                var messagesScreen = document.getElementsByClassName("messages")[0];

                //check if the previous replies in the messages screen messagesScreen.getElementsByTagName("ul") have data.avatar
                //if no previous replies exist, we will generate a new random number between 1 and 40 (inclusive) for the avatar
                //if previous replies exist, we will use the last avatar number
                // if (messagesScreen.getElementsByTagName("ul")[0].innerHTML != "") {
                //     //does there exist any class="replies"
                //     if (document.getElementsByClassName("replies").length > 0) {
                //         //get the last "replies" avatar number, it will not be the last element, but rather the second to last element
                //         //rannum = messagesScreen.getElementsByTagName("ul")[0].lastElementChild.previousElementSibling.getElementsByTagName("img")[0].src.split("new_grid/")[1].split(".")[0];
                //         //rannum = messagesScreen.getElementsByTagName("ul")[0].lastElementChild.getElementsByTagName("img")[0].src.split("new_grid/")[1].split(".")[0];
                //         rannum = messagesScreen.getElementsByTagName("ul")[0].getElementsByClassName("replies")[0].getElementsByTagName("img")[0].src.split("new_grid/")[1].split(".")[0];
                //     }
                //     else {
                //         rannum = Math.floor(Math.random() * 3) + 1;
                //     }
                // }
                // else {
                //     rannum = Math.floor(Math.random() * 3) + 1;
                // } 

                var data = {};
                data.state = "replies";
                //Regular avatars
                //data.avatar = "img/uilv2.png";
                //Randomized avatars
                // avatarvar = "img/new_grid/" + rannum + ".png";
                avatarvar = "../img/bot.png";
                data.avatar = avatarvar;
                data.name = chatbot_name;
                data.msgHeader = chatbot_name;

                //Turn the html entities back into their original character in the chat response
                chatResponse = chatResponse.replace(/&amp;/g, "&");
                chatResponse = chatResponse.replace(/&lt;/g, "<");
                chatResponse = chatResponse.replace(/&gt;/g, ">");
                chatResponse = chatResponse.replace(/&quot;/g, '"');
                chatResponse = chatResponse.replace(/&#039;/g, "'");
                chatResponse = chatResponse.replace(/&nbsp;/g, " ");
                //replace &#39 with '
                chatResponse = chatResponse.replace(/&#39;/g, "'");

                //Convert the ^ to . and the ~ to /
                //if ^ or ~ is in the chat response
                if (chatResponse.includes("^") || chatResponse.includes("~")) {
                    //replace ^ with .
                    chatResponse = chatResponse.replace(/\^/g, ".");
                    //replace ~ with /
                    chatResponse = chatResponse.replace(/~/g, "/");
                    //add https:// to after "href='"
                    chatResponse = chatResponse.replace(/href='/g, "href='https://");
                
                }
                
                if (chatResponse.includes("<abbr>")) {
                    //split the chat response into the message and the citation
                    data.msg = chatResponse.split("<abbr>")[0];
                    console.log("Data msg is: " + data.msg + "")
                    data.cite = "<abbr>" + chatResponse.split("<abbr>")[1];
                    console.log("Data cite is: " + data.cite + "")
                }
                else {
                    data.msg = chatResponse;
                    data.cite = "";
                }
    
                //All chats will have suggestions, they look like this at the end of a message
                //suggestions:[ "Where do tornadoes form?", "How are tornadoes classified?", "What warning signs indicate a tornado?" ]
                //Get the suggestions from the chat response
                var suggestedbool = false;
                if (data.msg.includes("suggestions:")) {
                    suggestedbool = true;
                    suggestionslist = data.msg.split("suggestions:")[1];
                    data.msg = data.msg.split("suggestions:")[0];
                    //Get the suggestions
                    console.log("Suggestions: " + suggestionslist);
                    suggestionslist = suggestionslist.toString();
                    //Suggestions is an array
                    suggestionslist = JSON.parse(suggestionslist);
                    //Add the suggestions to the possible_questions array
                }

                else if (data.cite.includes("suggestions:")) {
                    suggestedbool = true;
                    suggestionslist = data.cite.split("suggestions:")[1];
                    data.cite = data.cite.split("suggestions:")[0];
                    //Get the suggestions
                    console.log("Suggestions: " + suggestionslist);
                    suggestionslist = suggestionslist.toString();
                    //Suggestions is an array
                    suggestionslist = JSON.parse(suggestionslist);
                    //Add the suggestions to the possible_questions array
                }

                else {
                    console.log("No suggestions included in message");
                }

                //removing the current suggestions if no new suggestions
                if (!suggestedbool) {
                    clearSuggestions();
                }
                else {
                    suggestedbool = false;
                }

                //if response is unmerited
                if (data.msg.includes("<title>500 Internal Server Error</title>")) {
                    data.msg = "I'm sorry, I didn't quite catch that. Could you restate your question?";
                }
                
                function stripHtml(htmlString) {
                    // This regex matches any HTML tags and removes them
                    const plainText = htmlString.replace(/<[^>]*>/g, '');
                    // This regex matches any brackets with numbers inside and removes them ex. [1]
                    const plainText2 = plainText.replace(/\[\d\]/g, '');
                    const trimmedText = plainText2.trim();
                    return trimmedText;
                }
                safemsg = stripHtml(data.msg);

                // data.btns = `<div class=\"btnctrl\" style=\"
                //     position: relative;
                // \"><div style="
                // position: absolute;
                // width: 150px;
                // height: 30px;
                // left: 23px;
                // "></div><img class=\"chatbtn\" onclick="redoReply()" src=\"https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/618f418b-efa1-438a-b7df-0b184f03b536" style=\"
                //     position: absolute;
                //     cursor: pointer;
                //     scale: 0.8;
                //     left: 125px;
                //     bottom: -20px;
                //     border-radius: 0;
                //     filter: brightness(0.7);
                // \"><img class=\"chatbtn\" onclick="copyReply(\`` + safemsg + `\`)" src=\"https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/6c01ee77-15dd-446b-a783-736a1c2d3598" style=\"
                //     position: absolute;
                //     cursor: pointer;
                //     scale: 1.15;
                //     left: 97px;
                //     bottom: -20px;
                //     border-radius: 0;
                //     filter: brightness(0.65);
                // \"><img class=\"chatbtn\" onclick="rate_response(\`` + safemsg + `\`,0)" src=\"https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/a4c76f2b-9d7a-401c-bc19-fa840c83f294" style=\"
                //     position: absolute;
                //     cursor: pointer;
                //     scale: 1;
                //     left: 70px;
                //     bottom: -20px;
                //     border-radius: 0;
                //     filter: brightness(0.65);
                // \"><img class=\"chatbtn\" onclick="rate_response(\`` + safemsg + `\`,1)" src=\"https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/fb4ff1d4-e1b4-496d-8367-bbd008cdfe39" style=\"
                //     position: absolute;
                //     cursor: pointer;
                //     scale: 1;
                //     left: 43px;
                //     bottom: -20px;
                //     border-radius: 0;
                //     filter: brightness(0.65);
                // \"></div>`;

                data.btns = `<div class="btnctrl" style="
                display: flex;
                flex-direction: row;
                margin: 0;
                margin-left: 3.5rem;
                "><img class="chatbtn" onclick="rate_response(\`` + safemsg + `\`,1)" src="https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/fb4ff1d4-e1b4-496d-8367-bbd008cdfe39" style="
                    cursor: pointer;
                    scale: 0.85;
                    border-radius: 0;
                    filter: brightness(0.65);
                    margin: 0;
                    object-fit: contain;
                "><img class="chatbtn" onclick="rate_response(\`` + safemsg + `\`,0)" src="https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/a4c76f2b-9d7a-401c-bc19-fa840c83f294" style="
                cursor: pointer;
                scale: 0.85;
                border-radius: 0;
                filter: brightness(0.65);
                margin: 0;
                object-fit: contain;
            "><img class="chatbtn" onclick="copyReply(\`` + safemsg + `\`)" src="https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/6c01ee77-15dd-446b-a783-736a1c2d3598" style="
                cursor: pointer;
                border-radius: 0;
                filter: brightness(0.65);
                margin: 0;
                object-fit: contain;
            "><img onclick="redoReply()" src="https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/618f418b-efa1-438a-b7df-0b184f03b536" class="chatbtn" style="
            cursor: pointer;
            scale: 0.65;
            border-radius: 0px;
            filter: brightness(0.7);
            margin: 0;
            object-fit: contain;
            visibility: hidden;
            "></div>
                `;

                //messagesScreen.getElementsByTagName("ul")[0].innerHTML += `<li class="${data.state}"><img src="${data.avatar}" title="${data.name}" style="scale: 2; margin-right: 20px;" /><p><b>${data.msgHeader}</b><br>${data.msg}${data.cite}</p>${data.btns}</li>`;
                messagesScreen.getElementsByTagName("ul")[0].innerHTML += `<li class="${data.state}"><div style="display: flex; width: 100%;"><img src="${data.avatar}" title="${data.name}" style="object-fit: contain;
                min-width: 40px;
                object-position: top;
                overflow: inherit;" /><p id="temp"><b style="font-weight: 600;">${data.msgHeader}</b><br></p></div>${data.btns}</li>`;
                
                //wait for animateText to finish:
                animateText(data.msg + data.cite);
                updateLastReplies();
                //Always scrolled to the bottom
                chat = document.getElementById("chat");
                chat.scrollTop = chat.scrollHeight;

                //save to localstorage
                // saveToLocalStorage();

                //Matomo
                try {
                    _paq.push(['trackEvent', 'Emergency', 'Emergency_Receive_Message', safemsg]);
                    _paq.push(['trackEvent', 'Emergency', 'Emergency_Citations_Message', data.cite]);
                } catch (error) {
                    console.error('Failed to track in Matomo:', error);
                }

                //set visibility of "loader" to hidden
                document.getElementById("loader").style.visibility = "hidden";
                toggleTextarea(false);

            })
            .catch(error => {
                var messagesScreen = document.getElementsByClassName("messages")[0];
                //if any class="replies" exists, get the last avatar number
                // if (messagesScreen.getElementsByTagName("ul")[0].innerHTML != "") {
                //     //does there exist any class="replies"
                //     if (document.getElementsByClassName("replies").length > 0) {
                //         //get the last "replies" avatar number, it will not be the last element, but rather the second to last element
                //         //rannum = messagesScreen.getElementsByTagName("ul")[0].lastElementChild.previousElementSibling.getElementsByTagName("img")[0].src.split("new_grid/")[1].split(".")[0];
                //         //rannum = messagesScreen.getElementsByTagName("ul")[0].lastElementChild.getElementsByTagName("img")[0].src.split("new_grid/")[1].split(".")[0];
                //         rannum = messagesScreen.getElementsByTagName("ul")[0].getElementsByClassName("replies")[0].getElementsByTagName("img")[0].src.split("new_grid/")[1].split(".")[0];
                //     }
                //     else {
                //         rannum = Math.floor(Math.random() * 3) + 1;
                //     }
                // }
                // else {
                //     rannum = Math.floor(Math.random() * 3) + 1;
                // }   
                    
                //Regular avatar
                //avatarvar = "img/uilv2.png";
                //Randomized avatar
                // avatarvar = "img/new_grid/" + rannum + ".png";
                avatarvar = "../img/bot.png";

                const data = {
                    state: 'replies', // or any appropriate state
                    //avatar: 'img/uilv2.png', // replace with appropriate path
                    avatar: avatarvar,
                    name: chatbot_name,
                    msgHeader: chatbot_name,
                    btns: '' // any buttons if needed
                };
                var messagesScreen = document.getElementsByClassName("messages")[0];
                messagesScreen.getElementsByTagName("ul")[0].innerHTML += `<li class="${data.state}"><div style="display: flex; width: 100%;"><img src="${data.avatar}" title="${data.name}" style="object-fit: contain;
                min-width: 40px;
                object-position: top;
                overflow: inherit;" /><p id="temp"><b style="font-weight: 600;">${data.msgHeader}</b><br>The server is unavailable at the moment. Please try again later.</p></div>${data.btns}</li>`;
                //updateLastReplies();
                //Always scrolled to the bottom
                chat = document.getElementById("chat");
                chat.scrollTop = chat.scrollHeight;

                //Remove id temp
                document.getElementById("temp").removeAttribute("id");

                //saveToLocalStorage();

                document.getElementById("loader").style.visibility = "hidden";
                toggleTextarea(false);
                insurvey = false;

                //Matomo
                try {
                    _paq.push(['trackEvent', 'Emergency', 'Emergency_Receive_Message', "The server is unavailable at the moment. Please try again later."]);
                } catch (error) {
                    console.error('Failed to track in Matomo:', error);
                }
                console.log("Error:", error);
            });

        function saveToLocalStorage() {
            //console log localstorage channels
            console.log(localStorage.getItem("channels"));

            //update localstorage channel messages
            //curChannel is the current channel

            //localStorage.getItem("channels") looks like this:
            //{"channel0":{"dname":"Conversation 1","name":"channel0","messages":[]}}

            //update localstorage with curChannel's messages
            console.log("Current Channel: " + curChannel)
            var curChannel1 = localStorage.getItem("channels");
            var curChannel1json = JSON.parse(curChannel1);
            var curChannelcontents = curChannel1json[curChannel];

            var userMsg = prevMsg;

            ///add user's message, then add chatbot's response in alternating order to messages array
            curChannelcontents.messages.push(userMsg);
            curChannelcontents.messages.push(chatResponse);

            //NEW (Adding avatar to the saved storage so we can save/load same avatar for each conversation)
            curChannelcontents.avatar = avatarvar;

            //lstChannels is an array that looks like
            //0:{dname: 'ConversaHI', name: 'channel0', messages: Array(2)} 1:{dname: 'Conversation 2', name: 'channel1', messages: Array(8)}
            //get the lstChannel item with the name of curChannel and update its messages
            lstChannels.forEach(function (item, index) {
                if (item.name == curChannel) {
                    lstChannels[index].messages = curChannelcontents.messages;
                }
            });

            //update localstorage with new messages
            curChannel1json[curChannel] = curChannelcontents;
            localStorage.setItem("channels", JSON.stringify(curChannel1json));
            
            //set the selected channel
            localStorage.setItem("selectedChannel", curChannel)

            console.log(localStorage.getItem("channels"));
        }

    };
}

var prevMsg = "";
function text() {
    //if id="info" is not display:none, set it to display:none
    if (document.getElementById("info").style.display != "none") {
        console.log("curChannel:")
        console.log(curChannel)
        if (curChannel == null)
        {
            newChannel();
        }
        document.getElementById("info").style.display = "none";
    }

    //var text = document.getElementById("text").value;
    //alert(text);
    // add to self screen
    //var messagesScreen = $(".messages");
    var messagesScreen = document.getElementsByClassName("messages")[0];
    
    var data = {};
    data.state = "sent";
    data.avatar = "../img/user.png";
    data.name = "You";
    data.msgHeader = "You";
    data.msg = document.getElementById("dp-chatbot-text").value;
    //For saving to localstorage
    prevMsg = data.msg;

    // messagesScreen.getElementsByTagName("ul")[0].innerHTML += `<li class="${data.state}"><img src="${data.avatar}" title="${data.name}" style="scale: 2; margin-right: -40px;" /><p><b>${data.msgHeader}</b><br>${data.msg}</p></li>`;
    messagesScreen.getElementsByTagName("ul")[0].innerHTML += `<li class="${data.state}" style="display: flex;
    flex-direction: row-reverse;"><img src="${data.avatar}" title="${data.name}" style="object-fit: contain;
    min-width: 40px;
    object-position: top;
    overflow: inherit;" /><p><b style="font-weight: 600;">${data.msgHeader}</b><br>${data.msg}</p></li>`;
 
    //Always scrolled to the bottom
    chat = document.getElementById("chat");
    chat.scrollTop = chat.scrollHeight;

    //clear the text box
    sent_text = document.getElementById("dp-chatbot-text").value;
    document.getElementById("dp-chatbot-text").value = "";

    //set visibility of "loader" to visible
    document.getElementById("loader").style.visibility = "visible";
    toggleTextarea(true);


}

function loadSavedChannels() {
    console.log("loadSavedChannels() called");
    console.log(localStorage.getItem("channels"));
    //if there are no saved channels, return
    if (localStorage.getItem("channels") == null) {
        return;
    }

    //get saved channels
    var savedChannels = localStorage.getItem("channels");
    var savedChannelsJson = JSON.parse(savedChannels);

    //get a dictionary of all the channels in localstorage.channels
    var channels = savedChannelsJson;
    
    console.log(channels);
    
    //Add the channels to the channel list (id = "channelContacts")
    for (var key in channels) {
        if (channels.hasOwnProperty(key)) {
            //console.log(key + " -> " + channels[key]);
            var channel = channels[key];
            var channelName = channel.name;
            var channelDname = channel.dname;
            var channelMessages = channel.messages;
            //console.log(channelName);
            //console.log(channelDname);
            //console.log(channelMessages);
            lstChannels.push(channels[key]);
            console.log(lstChannels);
            //add channel to channel list
            var channelContacts = document.getElementById("channelContacts");
            //example of innerHTML:
            //<li id="channel0" class="contact" style="background-color: rgb(10, 70, 90);"><div class="wrap" onclick="reqChatBy(&quot;channel0&quot;)">				
            // <i class="fa fa-comment fa-fw" aria-hidden="true" style="
            // 	width: 40px;
            // 	border-radius: 50%;
            // 	float: left;
            // 	margin-right: 10px;
            // 	margin-top: 12px;
            // "></i>
            // 	<div class="wait"></div>
            // 	<div class="meta" style="display: flex;">
            // 		<p id="pchannel0" class="name badge" data-badge="">Conversation 1</p>
            // 		<i class="fa fa-pencil fa-fw" aria-hidden="true" onclick="toggleRenameChannel('channel0')" style="width: 40px; border-radius: 50%; float: right; margin-right: 10px; margin-top: 9px; position: absolute; right: 5%; visibility: visible;"></i>
            // 			<i class="fa fa-trash fa-fw" aria-hidden="true" onclick="delChannel('channel0')" style="width: 40px; border-radius: 50%; float: right; margin-right: 10px; margin-top: 9px; position: absolute; right: -5%; visibility: visible;"></i>
            // 	</div>
            // </div></li>

            channelContacts.innerHTML += `<li id="${channelName}" class="contact"><div class="wrap" onclick="reqChatBy(&quot;${channelName}&quot;)">
            <i class="fa fa-comment fa-fw" aria-hidden="true" style="
                width: 40px;
                border-radius: 50%;
                float: left;
                margin-right: 10px;
                margin-top: 12px;
            "></i>
            <div class='wait'></div>
                <div class='meta' style="display: flex;">
                    <p id='p${channel.name}' class='name badge' data-badge=''>${channel.dname}</p>
                    <i class="fa fa-pencil fa-fw" aria-hidden="true" onclick="toggleRenameChannel('${channel.name}')" style="
                        width: 40px;
                        border-radius: 50%;
                        float: right;
                        margin-right: 10px;
                        margin-top: 9px;
                        position: absolute;
                        right: 5%;
                        visibility: hidden;
                    "></i>
                        <i class="fa fa-trash fa-fw" aria-hidden="true" onclick="delChannel('${channel.name}')" style="
                        width: 40px;
                        border-radius: 50%;
                        float: right;
                        margin-right: 10px;
                        margin-top: 9px;
                        position: absolute;
                        right: -5%;
                        visibility: hidden;
                    "></i>
                </div>
            </div>`

            
            //Doesn't work WIP
        
        }
    }

    // Selecting the selected channel (I will maybe put this in Settings menu, as reload + new conversation is more intuitive)
    // var selectedChannel = localStorage.getItem("selectedChannel");
    // if (selectedChannel != null) {
    // 	reqChatBy(selectedChannel);
    // }
    // setSelected(selectedChannel);
    // clearSelected();




}

//call loadSavedChannels() when page loads
// loadSavedChannels();

//Small Displays and Mobile
window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

if (window.innerWidth < 600 || mobileCheck()) {
    toggleMobileView();
    toggleMobileApp();
}

//Laptop View
// function toggleLaptopView() {
//     //Laptop view isn't very different from desktop view, I only change "info" box to resize
//     eleminfo = document.getElementById("info");

//     if (window.innerWidth < 1900 && window.innerWidth > 1366) {
//         eleminfo.style.top = -5 - (window.innerWidth - 1366) / (1920 - 1366) * 10 + "%";
//         eleminfo.style.transform = "scale(" + (1 - (window.innerWidth - 1366) / (1920 - 1366) * 0.75) + ")";
//     } else if (window.innerWidth <= 1366) {
//         eleminfo.style.top = "-15%";
//         eleminfo.style.transform = "scale(0.9)";
//     }
// }
// if (window.innerWidth < 1900 && !(mobileCheck() || window.innerWidth < 600)) {
//     toggleLaptopView();
// }

//Mobile View
// function toggleMobileView() {
//     //get element with class "submit" and set right to -60% and bottom to 16px
//     var submit = document.getElementsByClassName("submit")[0];
//     submit.style.left = "-8%";
//     submit.style.bottom = "15px";
//     submit.style.width = "12%";
//     submit.style.position = "relative";
//     submit.style.right = "";

//     //get element with id="text" and set max-width to 100%
//     var text = document.getElementById("text");
//     text.style.maxWidth = "100%";
//     text.style.left = "7%";
//     text.style.position = "relative";
//     text.style.paddingRight = "15%";
   
//     //get element with class "messages" and set max-width to 100% and margin-left to 0
//     var messages = document.getElementsByClassName("messages")[0];
//     messages.style.maxWidth = "100%";
//     messages.style.marginLeft = "0";

//     //set loader left: 10%;	bottom: 125%;
//     var loader = document.getElementById("loader");
//     loader.style.left = "10%";
//     loader.style.bottom = "125%";

//     //set top of info to -10%
//     var info = document.getElementById("info");
//     info.style.top = "-20%";
// }

// function appOnly() {
//     //Add margin-bottom: 10px to the first two buttons with class="btn" 
//     var btns = document.getElementsByClassName("btn");
//     btns[0].style.marginBottom = "10px";
//     btns[1].style.marginBottom = "10px";
//     //Add margin-bottom: 10px to the first two buttons with class="linfo"
//     var linfo = document.getElementsByClassName("linfo");
//     linfo[0].style.marginBottom = "10px";
//     linfo[1].style.marginBottom = "10px";
// }

// function exampleToggle() {
//     document.getElementById("s2").style.left = "150%";
//     document.getElementById("s1").style.left = "68%";
//     document.getElementById("circle1").style.backgroundColor = "grey";
//     document.getElementById("circle2").style.backgroundColor = "lightgrey";
// }

// function toggleMobileApp()
// {

// document.getElementById("headlessui-dialog-panel-:r1:").style.position = "absolute";
// document.getElementById("headlessui-dialog-panel-:r1:").style.top = "28%";
// document.getElementById("headlessui-dialog-panel-:r1:").style.transform = "scale(0.9)";

// document.getElementById("s1").style.position = "absolute";
// document.getElementById("s2").style.position = "absolute";

// document.getElementById("circle1").style.display = "inline-block";
// document.getElementById("circle2").style.display = "inline-block";
// document.getElementById("appselectinfobox").style.display = "block";

// exampleToggle();

// document.getElementById("appselectinfobox").addEventListener("click", function() {
//     infoBoxToggle();
// });

// var infobool = false;
// function infoBoxToggle() {
//     if (infobool == false) {
//         limitationToggle();
//         infobool = true;
//     } else {
//         exampleToggle();
//         infobool = false;
//     }
// }

// document.getElementById("circle2").addEventListener("click", function() {
//     limitationToggle();
// });

// function limitationToggle() {
//     document.getElementById("s1").style.left = "-150%";
//     document.getElementById("s2").style.left = "-74%";
//     document.getElementById("circle1").style.backgroundColor = "lightgrey";
//     document.getElementById("circle2").style.backgroundColor = "grey";
// }

// document.getElementById("circle1").addEventListener("click", function() {
//     exampleToggle();
// });

// }				

btnintro = document.getElementsByClassName("btnintro");
for (i = 0; i < btnintro.length; i++) {
    btnintro[i].addEventListener("mouseover", function() {
        this.style.cursor = "pointer";
    });
}
// function startTut() {
//     if (localStorage.getItem("tutorial") == null || localStorage.getItem("tutorial") == "false") {
//         document.getElementById("headlessui-portal-root").style.display = "block";
//         document.getElementsByClassName("message-input")[0].style.zIndex = "0";
//         document.getElementById("tut1").style.display = "block";
//     }
// }
// startTut();
// function nextTut() {
//     if (document.getElementById("tut1").style.display == "block") {
//         document.getElementById("tut1").style.display = "none";
//         document.getElementById("tut2").style.display = "block";
//     }
//     else if (document.getElementById("tut2").style.display == "block") {
//         document.getElementById("tut2").style.display = "none";
//         document.getElementById("tut3").style.display = "block";
//     }
//     else if (document.getElementById("tut3").style.display == "block") {
//         document.getElementById("tut3").style.display = "none";
//         document.getElementById("headlessui-portal-root").style.display = "none";
//         document.getElementsByClassName("message-input")[0].style.zIndex = "99";
//         localStorage.setItem("tutorial", "true");
//     }
// }
// function backTut() {
//     if (document.getElementById("tut3").style.display == "block") {
//         document.getElementById("tut3").style.display = "none";
//         document.getElementById("tut2").style.display = "block";
//     }
//     else if (document.getElementById("tut2").style.display == "block") {
//         document.getElementById("tut2").style.display = "none";
//         document.getElementById("tut1").style.display = "block";
//     }
// }	

// if (document.getElementById("tut1").style.display == "block" || document.getElementById("tut2").style.display == "block" || document.getElementById("tut3").style.display == "block") {
//     document.getElementsByClassName("message-input")[0].style.zIndex = "0";
// }

// //if localstorage tutorial is true, set z-index of text to 99
// if (localStorage.getItem("tutorial") == "true") {
//     document.getElementsByClassName("message-input")[0].style.zIndex = "99";
// }

var isAnimating = false
function animateText(message) {
    isAnimating = true

    //if <sup> is in the message
    if (message.includes('<sup>')) {
        splitIndex = message.indexOf('<sup>')
    }
    else {
        //split index will just be the last character
        splitIndex = message.length
    }
    
    //message = message.toString()
    let textPart = message.substring(0, splitIndex)
    console.log("Message: ", textPart)
    let htmlPart = message.substring(splitIndex)
    console.log("Citation: ", htmlPart)

//     upperdiv.innerHTML = upperdiv.innerHTML + `<div class="message">
//     <div class="appmessagediv">
//         <div class="appmessage" id="temp">
//         </div>
//     </div>
// </div>`

    //get the last class="replies" element
    //last_reply = document.getElementsByClassName("replies")[document.getElementsByClassName("replies").length - 1]
    //get the p with id "animateZone"
    last_reply = document.getElementById("temp")
    temp = last_reply

    //let temp = document.getElementById('temp')
    let index = 0
    function displayNextLetter() {
        scrollToBottom()
        if (index < textPart.length) {
            // temp.innerHTML = temp.innerHTML + textPart[index];
            // index++;
            // setTimeout(displayNextLetter, 30);
            //keyword part
            let nextChar = textPart[index];
            if (nextChar === '<' && textPart.substring(index, index + 9).includes('<a style=')) {
                // Find the closing tag of the link
                closeTagIndex = textPart.indexOf('</a>', index) + 4;
                // Insert the HTML link directly into the DOM
                linkHTML = textPart.substring(index, closeTagIndex);
                textOflink = textPart.substring(textPart.indexOf("\">") + 2, textPart.indexOf('</a>', index))
                // This directly modifies the DOM right then and there
                //temp.innerHTML += linkHTML; index = closeTagIndex;    
                
                //We will insert a special character after the closeTagIndex, so that when we hit it, we will insert the linkHTML
                //temp.innerHTML += textPart.substring(index, closeTagIndex) + '•'; index = closeTagIndex;
                //Let's add the text of the inside of the linkhtml to be animated in normally before we substitute the linkHTML
                textPart = textPart.substring(0, index) + textOflink + "•" + textPart.substring(closeTagIndex)
                console.log("Before text: ", textPart.substring(0, index))
                console.log("Text of link: ", textOflink)
                console.log("After text: ", textPart.substring(closeTagIndex))

            }
            else if (nextChar === '•') {
                // Substitute the last instance of the textOfLink with the linkHTML
                temp.innerHTML = temp.innerHTML.substring(0, temp.innerHTML.lastIndexOf(textOflink)) + linkHTML; index++;
            }
            else {
                temp.innerHTML += nextChar; index++;
            }
            setTimeout(displayNextLetter, 20);
        } else {
            temp.removeAttribute('id')
            //sendbtn.disabled = false
            //userinputarea.disabled = false
            temp.innerHTML += htmlPart
            isAnimating = false

            //Enable the redo button, which will be the last child of the last class="btnctrl"
            curRedoBtn = document.getElementsByClassName("btnctrl")[document.getElementsByClassName("btnctrl").length - 1].lastElementChild
            curRedoBtn.style.visibility = "visible"

            //Organize the suggestions list from longest to shortest
            suggestionslist.sort(function(a, b) {
                return b.length - a.length;
            }); 
            //if there are suggestions, add them
            for (var i = 0; i < suggestionslist.length; i++) {
                addSuggestion(suggestionslist[i]);
                console.log("Adding suggestion: " + suggestionslist[i]);
            }
            //set id suggestions to display flex
            document.getElementById("suggestions").style.display = "flex";
        }
    }
    displayNextLetter()
    scrollToBottom()
}

function scrollToBottom() {
    chat = document.getElementById("chat");
    chat.scrollTop = chat.scrollHeight;
}

function addSuggestion(suggestion) {

    suggestions = document.getElementById("suggestions");
    suggestions.innerHTML += `<button class="suggest" style="
        height: 25px;
        padding: 0 12px;
        margin: 0 5px;
        border: solid 2px;
        cursor: pointer;
        color: var(--cds-chat-PRIMARY-color);
        background: #fff;
        border-radius: 12px;
        font-size: 12px;
        line-height: 10px;
        font-weight: 500;
        width: max-content;
        " onclick="addBtnMessage(this)">${suggestion}</button>`

}

function clearSuggestions() {
    document.getElementById("suggestions").innerHTML = "";
}

let isRecording = false;
const toggleBtn = document.getElementById('toggleBtn');
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = 'en-US';

recognition.onresult = function(event) {
    // prevent default
    event.preventDefault();
    const transcript = event.results[event.resultIndex][0].transcript;
    console.log('Transcript:', transcript);
    // Send the transcript to the server or handle it as needed
    sendTranscriptToServer(transcript);
};
recognition.onerror = function(event) {
    console.error('Speech recognition error detected:', event.error);
};
toggleBtn.addEventListener('click', function() {
    console.log("Clicked on VC Button")
    if (isRecording) {
        //prevent default
        event.preventDefault();
        recognition.stop();
        isRecording = false;
        btnImage.src = 'https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/6e81388f-c57c-4808-b756-98b3ebd59242'; // Switch to start image
    } else {
        event.preventDefault();
        if (localStorage.getItem("vocallangset") == null || localStorage.getItem("vocallangset") == "false") {
            startVC();
        }
        else {
            checkLanguagePreference()
            console.log("Starting vocal input with language: " + localStorage.getItem("vocallang"));
            recognition.start();
            isRecording = true;
            btnImage.src = 'https://github.com/seanhlewis/seanhlewis.github.io/assets/96705270/3be4c889-489f-4733-9ac0-adeb398670e5'; // Switch to stop image
        }
    }
});
function sendTranscriptToServer(transcript) {
    // Implement the function to send the transcript to the server
    //console.log('Sending transcript to server:', transcript);
    console.log('Putting voice input into text box:', transcript);
    document.getElementById("dp-chatbot-text").value += transcript;
}
function startVC() {
    if (localStorage.getItem("vocallangset") == null || localStorage.getItem("vocallangset") == "false") {
        document.getElementById("headlessui-portal-root2").style.display = "block";
        //document.getElementById('languagePopup').style.display = 'flex';
        document.getElementsByClassName("message-input")[0].style.zIndex = "0";
    }
}
function toggleVC() {
    if (document.getElementById("headlessui-portal-root2").style.display == "block") {
        document.getElementById("headlessui-portal-root2").style.display = "none";
        document.getElementsByClassName("message-input")[0].style.zIndex = "99";
        //if vocal language is not set, set it to true
        if (localStorage.getItem("vocallangset") == null || localStorage.getItem("vocallangset") == "false") {
            localStorage.setItem("vocallangset", "true");
        }
        saveLanguage();
        console.log("Vocal language set to: " + document.getElementById('language').value);
    }
    else {
        document.getElementById("headlessui-portal-root2").style.display = "block";
        //document.getElementById('languagePopup').style.display = 'flex';
        document.getElementsByClassName("message-input")[0].style.zIndex = "0";
    }
}
function doneVC() {
        document.getElementById("headlessui-portal-root2").style.display = "none";
        document.getElementsByClassName("message-input")[0].style.zIndex = "99";
        //if vocal language is not set, set it to true
        if (localStorage.getItem("vocallangset") == null || localStorage.getItem("vocallangset") == "false") {
            localStorage.setItem("vocallangset", "true");
        }
        saveLanguage();
        console.log("Vocal language set to: " + document.getElementById('language').value);
}
function saveLanguage() {
    const language = document.getElementById('language').value;
    //if language is the same as previous, don't do anything
    if (localStorage.getItem("vocallang") == language) {
        return
    }
    localStorage.setItem("vocallang", language);
    //document.getElementById('languagePopup').style.display = 'none';
    updateRecognitionLanguage(language);
}
// Read the language cookie and set the recognition language
function checkLanguagePreference() {
    const languageCookie = localStorage.getItem("vocallang");
    if (languageCookie) {
        document.getElementById('language').value = languageCookie
        updateRecognitionLanguage(languageCookie);
    } else {
        //showPopup(); // Show popup if no language is set
        console.log("No vocal language set. Will prompt on vocal input.")
    }
}
// Update language in speech recognition
function updateRecognitionLanguage(newLang) {
    if (isRecording) {
        recognition.stop();
        recognition.lang = newLang;
        recognition.start();
    } else {
        recognition.lang = newLang;
    }
}
//window.onload = checkLanguagePreference;

//Generating a base64 string the first time the user visits the page and saving it as a cookie named session_id
function generateSessionID() {
    const array = new Uint32Array(8);
    window.crypto.getRandomValues(array);
    // Convert each element of the array to a hexadecimal string and concatenate them.
    let hexString = '';
    for (let i = 0; i < array.length; i++) {
        hexString += array[i].toString(16).padStart(8, '0'); // Ensure fixed length with padding
    }
    return btoa(hexString);
}

if (localStorage.getItem("session_id") == null) {
    const session_id = generateSessionID();
    localStorage.setItem("session_id", session_id);
}

function rate_response(response, rating) {
    fetch('https://apiemergency.austindigitaltwin.com/rating', {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    r: response,
                    a: rating,
                })
            })
            
            .then(response => {
                try {
                    response = response.json();
                    //if error in response json
                    if (response.error) {
                        console.log('Error:', response.error);
                        throw new Error('Network response was not ok ' + response.error);
                    }
                    return response;
                }
                catch {
                    console.log('Error:', response);
                    throw new Error('Network response was not ok ' + response);
                }
            })

            .then(data => {
                console.log('Success:', data);
            }
            )

            .catch(error => {
                console.error('Error:', error);
            });
}

// let isDisabled = false; // This is your boolean variable to control the textarea

function toggleTextarea(state) {
    const textarea = document.getElementById("dp-chatbot-text");
    if (state) {
        textarea.placeholder = ''; // Set placeholder to empty
        textarea.disabled = true; // Disable the textarea
    } else {
        textarea.placeholder = 'Write your question...'; // Restore the placeholder
        textarea.disabled = false; // Enable the textarea
    }
}

// Example usage:
// toggleTextarea(isDisabled); // Call this function with true or false to toggle the state
