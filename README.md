6.8510 Final Project
========================================================================

Introduction
------------------------------------------------------------------------
This is a repository for Voice Controlled Pokémon Battles based off of the client code for [Pokémon Showdown](https://github.com/smogon/pokemon-showdown-client).

The project is deployed at https://uifinalproject-client2.onrender.com/. The web application should be run on Chrome. 

Local Testing 
------------------------------------------------------------------------
The local version has been run on Ubuntu 22.04.3 LTS and MacOS Sonoma. 

The client requires a build step. Install the latest Node.js (v14 or later), and run `node build` (on Windows) or `./build` (on other OSes) to build after cloning the repository. 

After building, open  `testclient.html` located in the `play.pokemonshowdown.com` directory. This will connect to the main Pokémon Showdown server. 

### Connecting to a Local Server
In case the main Pokémon Showdown server is down, you can run and connect the client to a locally hosted server. To do this, clone the [Pokémon Showdown server](https://github.com/smogon/pokemon-showdown/tree/master) and follow the instructions [here](https://github.com/smogon/pokemon-showdown/blob/master/server/README.md) to start a local host. 

Once the local host is running, you can connect the client by navigating to  `testclient.html?~~host:port`. For example, to connect to a server running locally on port 8000, you can navigate to  `testclient.html?~~localhost:8000`.

### Test keys
For security reasons, browsers [don't let other websites control PS][5], so they can't screw with your account, but it does make it harder to log in on the test client.

  The default hack makes you copy/paste the data instead, but if you're refreshing a lot, just add a `config/testclient-key.js` file, with the contents:

`const POKEMON_SHOWDOWN_TESTCLIENT_KEY = 'sid';`

[5]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

    
Table of Contents
------------------------------------------------------------------------

The main directory relevant to our project is `play.pokemonshowdown.com`. Here, the `testclient.html` file serves the main client for users.

The `src` directory in `pokemonshowdown.com` contains the Typescript files that are compiled into Javascript files that define all the functionality for the client upon build. 

The `js` directory in `play.pokemonshowdown.com` contains the compiled Javascript files as well as the main Javascript files that call the compiled files to create the client. `client-battle.js` defines how battles operate. 