# Web-HMIF-GEN-15
 Website utama Himpunan Mahasiswa Informatika Universitas Multimedia Nusantara (HMIF UMN). A whole new HMIF's Dashboard as the powerful information platform for every informatics student in every needs 🍻

## Contributing
- [Web-HMIF](#web-hmif)
  - [Contributing](#contributing)
    - [Getting Start](#getting-start)
      - [Tech Stacks ⚙️](#tech-stacks-)
      - [Project Folder Structure 📁](#project-folder-structure-)
      - [IDE Recommendation](#ide-recommendation)
      - [Requirement](#requirement)
      - [Setup](#setup)
        - [Web-HMIF](#hmif.umn.ac.id)
    - [Making Changes](#making-changes)
      - [For a new feature:](#for-a-new-feature)
      - [For a Bugfix:](#for-a-bugfix)
      - [Releasing / Deployment](#releasing--deployment)
    - [Ex-contributor](#ex-contributor)
- [Changes Log 📜](#changes-log-)

### Getting Start
#### Tech Stacks ⚙️
- PHP Laravel (BackEnd)
- ReactJS (FrontEnd)
- InertiaJS (Monolith)
- Tailwind CSS
- Filament (CMS)
- StoryBoardJS (Component Management ReactJS)
- MySQL (DB)
- Github (Version control)
- Github Action (CI/CD)
- Discord, Line (Communication Tools)

#### Project Folder Structure 📁
- app/
    - Controllers, Models, Providers, Filament etc
- bootstrap/
- config/
    - Auth, Mailing, Database, Filesystem, other configs
- database/
    - Migrations, Seeders
- lang/
    - For multi langsuage purposes
- public/
    - Assets, Images, Fonts
- resources/
    - Main view, React codes
- routes/
    - Routing
- storage/
    - Logs, Data storages
- tests/

#### IDE Recommendation
- [PhpStorm](https://www.jetbrains.com/phpstorm/download/#section=windows)
  - [How to install](https://www.jetbrains.com/help/phpstorm/installation-guide.html#snap)
- [Visual Studio Code](https://code.visualstudio.com/download)
  - [How to install](https://code.visualstudio.com/docs)
  
#### Requirement
- PHP: 8.1
- Composer: 2.x
- [MySQL](https://www.mysql.com/)

#### Local Development Environments
- [XAMPP](https://www.apachefriends.org/download.html)
- [Laragon](https://laragon.org/docs/install)

#### Setup
##### hmif.umn.ac.id
The following steps may help you to host this project locally.
1. Clone the project
    ```bash
    git clone git@github.com:HMIF-UMN/Web-HMIF.git
    ```

2. Install all dependency and package
    ```bash
    composer install
    ```

3. Update `.env` with your local credential
    ```bash
    cp .envexample .env
    ```

4. Generate APP_KEY
    ```bash
    php artisan key:generate
    ```
    
5. Generate database seeder
    Add new database named by your env value. Then do:
    ```bash
    php artisan migrate:fresh --seed
    ```

    If You have the old database. Then do:
    ```bash
    php artisan migrate:refresh --seed
    ```

7. Host project by running 
    ```bash
    php artisan serve
    ```
  
    and
    ```bash
    npm run dev
    ```
    
##### utf.umn.ac.id
Comming Soon (Not umn.ac.id yet 😭)

##### For Email Testing
email : hmif.rnd@gmail.com
password : RnD1234!

##### CMS Account
email : hmif@umn.ac.id
password : hmifjaya123

### Making Changes
#### For a new feature:
- On `development` branch
- Create a branch `feature/your-new-feature-name`
- Add your changes
- Send a pull request to the `development` branch

#### For a Bugfix:
- On `production` branch
- Create a branch `hotfix/your-hotfix-name`
- Add your changes
- Send a pull request to the `production` branch

#### Releasing / Deployment
1. Before merging development to production, append new CHANGELOG to explain what changes is being made
   1. Commit the changes with message `Update CHANGELOG Web-HMIF to x.x.x`
2. After merged to master, change the commit message to
   1. If releasing Web-HMIF `Release Web-HMIF x.x.x`
3. Create Release note and tag in gitlab for every release to production
   1. For Web-HMIF name the release title and tag with `vx.x.x`
   
### Ex-contributor
Sweats and bloods. We want to appreciate and give credit to all men behind the Dashboard.
We have these geek guys to develop, maintain, and improve this project:
- HMIF Gen 13
- HMIF Gen 14
 
 - HMIF Gen 15
   Coming Soon

We also have our Chiefs, Antonius Kevin (Gen 13), who always encourage and support us to give our best.

## Changes Log 📜
### Version 1.0.0
🌟 Main Changes:
- Initial Commit
- Coming Soon Page

#### Version 1.0.1
🌟 Main Changes:
- Revamp tampilan halaman Coming Soon
- Discord server release!!

✨ Minor Changes:
- Preparing for next big update!

### Version 1.1.0
🌟 Main Changes:
- Add Home page
- Add About Us page
- Add Proker page

✨ Minor Changes:
- Preparing for next website content!

#### Version 1.1.1
🌟 Main Changes:
- Add codeXpo content
- Optimize images & other assets


✨ Minor Changes:
- Fix navbar reesponsive logic
- Set placeholder for lazyload images

#### Version 1.1.2
🌟 Main Changes:
- Add codeXpo type racer leaderboard
- Add codeXpo mobile legends bracket
- Add simple login register system for admin
- Add simple admin page
- Add social media endpoints


✨ Minor Changes:
- Fix some AOS bugs

#### Version 1.1.3
✨ Minor Changes:
- Fix visual bugs on codeXpo
- Add custom instagram URLs

#### Version 1.2
🌟 Main Changes:
- Add Computer Science Shelter (CSS) contents
- Add logics for team and individual registration of CSS IF
- Integrate UMN Single Sign On feature into HMIF UMN’s website


✨ Minor Changes:
- Fix some minor bugs
- Fix navigation bar bug on mobile view

#### Version 1.3
🌟 Main Changes:
- Update Laravel Version to 10.48.12
- Add Content Management System
- Update About Us View For Division


✨ Minor Changes:
- Fix some minor bugs

#### Version 1.4
🌟 Main Changes:
- Add Form Aspirasi
- Connect With Google Sheet (https://docs.google.com/spreadsheets/d/1ZHQhqqCqsOefNyEe9CA20GkR6_h0_N609OjDI46zL9k/edit?pli=1&gid=0#gid=0)
- Add Email Notification when submit data


✨ Minor Changes:
- Fix some minor bugs

#### Version 1.4.2
🌟 Main Changes:
- Add Seeders For All data

✨ Minor Changes:
- Fix some minor bugs

#### Version 1.5 (coming soon)
🌟 Main Changes:
- Language change into English
- API proker

✨ Minor Changes:
- Change external internal contact
