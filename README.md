# Introduction

This is a **Next.js** project that shows a **Spotify-style design**.  
It mostly uses **Tailwind CSS** for styling, and **CSS Modules** are used for some components.


## Data Source

This project uses **Spotify's Web API** as the data source.  
The data includes **albums**, **artists**, and **search results**.


## Tools and Libraries Used

- **Tailwind CSS** and **CSS Modules** for styling  
- **React Context** for global state management  
- **node-vibrant** for extracting colors from images  
- **clsx** for combining class names easily  
- **Sass** for writing more organized and maintainable CSS


## Pages

The website has **four main pages**:

1. **Home Page**  
   This page displays a list of **recommended albums** and **new releases**.  
   - The layout uses **two parallel routes** (`recommendedalbums` and `newreleases`) so that an error in one route does not affect the other.  
   - By wrapping the parallel routes with **Suspense**, both pages are fetched at the same time, and each shows its own **loading fallback**.

2. **Album Page**  
   Clicking an album redirects to `/albums/[albumId]`, where the **album details** are displayed.  
   - Includes an **album header** with the album name, artists, and duration.  
   - Displays a **list of tracks** in the album below the header.

3. **Artist Page**  
   Clicking an artist redirects to `/artists/[artistId]`.  
   - Includes a **header** with the artist name and total number of followers.  
   - Shows a **Top Tracks** section.  
   - Contains a **parallel route** `artistalbums` that fetches and displays the artist's albums separately. This route has its **own error page**, and wrapping it with Suspense provides similar benefits as on the Home Page.

4. **Search Page**  
   Typing in the **search box** in the header redirects to `/search/[query]`.  
   - The query is sent to **Spotify Web API**, and the results include **tracks, artists, and albums**.

> **Note:**  
> Buttons such as **play, shuffle, follow, save, and download** are interactive, but their state is preserved only in **React Context**. This means they **do not affect real Spotify data** and are for **visual demonstration only**.  
> The **play button** triggers an animation, but **does not play actual songs**.


## Installation

Follow these steps to set up the project locally:

1. Copy the repository URL and open a terminal (e.g., Bash, CMD, PowerShell) in the folder where you want to store the project.
2. Run `git clone <repository-url>` to clone the repository.
3. After cloning, open the project folder in your code editor.
4. Run `npm install` to install all dependencies.
5. Set up Spotify Web API credentials:  
   - Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and log in with your Spotify account.  
   - Click **"Create an App"**.  
   - Give your app a **name** and **description** (these can be anything).  
   - For **Redirect URI**, add `http://127.0.0.1:3000/api/auth/callback` (or any URI your project expects). This is required for authentication flows.  
   - After creating the app, you will see the **Client ID** and **Client Secret** on the app page. Copy these values.  
   - These credentials will be used in the `.env` file to allow the project to access Spotify’s Web API.

6. Copy the contents of `.env.example` (provided in the project root) into a new file named `.env`.
7. Paste your **Spotify Client ID** and **Client Secret** into the corresponding variables in `.env`.
8. After all dependencies are installed and environment variables are set, run `npm run dev` to start the development server.
9. Copy the provided localhost URL (usually `http://localhost:3000`) and open it in your browser. The app should now be running.


## Usage

After opening the website, you will see a list of albums on the **Home Page**.  

- Click on any album to go to its **Album Page**, which shows detailed information about that album.  
- Click on an artist's name (shown in album headers, track lists, or album cards) to go to the **Artist Page**.  
- Use the **search bar** to search for any item; the **Search Page** will display results for tracks, albums, and artists.  
- You can also navigate to artist or album pages by clicking on **artist cards**, **track artist names**, or **album cards** throughout the site.

