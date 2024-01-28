# Discord Management Bot for CSE2015 - Internet Programming and Web Technologies

This project is a comprehensive Discord bot developed for the course CSE2015 - Internet Programming and Web Technologies. The bot is designed to enhance server management and interaction on Discord through a variety of commands. Additionally, a web interface for guild administrators is provided, allowing for convenient management of bot capabilities.

## Features

### Bot Commands
- `add`: Add new features or commands to the bot.
- `addcommand`: Enable guild admins to add custom commands.
- `addrole`: Assign roles to users.
- `ban`: Ban users from the server.
- `guildid`: Retrieve the unique ID of the guild.
- `prefix`: Set or change the command prefix for the bot.
- `purge`: Bulk delete messages.
- `removerole`: Remove roles from users.
- `unban`: Revoke bans on users.
- `kick`: Remove users from the server temporarily.
- `mute`: Temporarily mute users in the server.
- `poll`: Create polls for server members to vote.
- `announce`: Send announcements in a designated channel.
- `userinfo`: Display information about a specific user.
- `serverinfo`: Provide details about the server.
- `help`: List all available commands or get details about specific commands.

### MVC Architecture
- **Models**: Represent the data structure, using MongoDB for data persistence.
- **Views**: Not directly implemented, as the bot interacts via Discord's interface.
- **Controllers**: Handle the business logic of the bot, interpreting user commands and interacting with the models.

### MongoDB Integration
- Used for storing and managing bot configurations, user roles, custom commands, and other persistent data.

## Web Interface
Developed using React, the web interface allows guild administrators to:
- Add or remove bot features.
- Manage custom commands.
- View and modify bot configurations.


## Technologies Used
- **Discord.js**: A powerful Node.js module that allows you to interact with the Discord API.
- **MongoDB**: A NoSQL database used for storing bot data.
- **React**: A JavaScript library for building user interfaces, used for the web dashboard.
- **Node.js**: JavaScript runtime for executing the server-side bot code.
- **Git**: Version control system for tracking changes and collaborative development.
- **Cloud Integration**: Hosted on cloud platforms for high availability and scalability.
- **CI/CD Pipelines**: Continuous integration and continuous deployment for efficient development cycles and quick releases.

## Contribution
Contributions are welcome. Please fork the repository and submit a pull request for any enhancements, bug fixes, or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

