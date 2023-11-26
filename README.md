# INSTALLATION

1. Install [node](https://nodejs.org/) and [git](https://git-scm.com/)

2. Clone repository
```bash
git clone https://github.com/imm-real/character_ai_selfbot
```

# Configure

Just edit config.json

# Getting c_ai token

1. Open the Character.AI website in your browser (https://beta.character.ai)
2. Open the developer tools (<kbd>F12</kbd>, <kbd>Ctrl+Shift+I</kbd>, or <kbd>Cmd+J</kbd>)
3. Go to the `Application` tab
4. Go to the `Storage` section and click on `Local Storage`
5. Look for the `@@auth0spajs@@::dyD3gE281MqgISG7FuIXYhL2WEknqZzv::https://auth0.character.ai/::openid profile email offline_access` key
6. Open the body with the arrows and copy the access token

![Access_Token](https://i.imgur.com/09Q9mLe.png)

## Finding character_id

You can find your character ID in the URL of a Character's chat page.

For example, if you go to the chat page of the character `Discord Moderator` you will see the URL `https://beta.character.ai/chat?char=8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw`.

The last part of the URL is the character ID:
![Character_ID](https://i.imgur.com/nd86fN4.png)

# Running 
1. Double click start.bat
