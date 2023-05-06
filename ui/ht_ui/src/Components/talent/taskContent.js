const aTag = (link) => (
  <a
    href={link}
    className="text-orange-700 hover:text-blue-500 underline font-serif"
    target="_blank"
    rel="noopener noreferrer"
  >
    Go to site
  </a>
);

export const currentTasks = {
  e110100: {
    name: "Reading",
    tips: [
      {
        id: "1",
        message:
          "Start by learning the English alphabet and the sounds associated with each letter. Begin with simple words that you are familiar with, such as names of animals, fruits, and vegetables.",
      },
      {
        id: "2",
        message:
          "Read picture books with simple sentences and illustrations. This will help you associate words with their meanings and enhance your understanding of the story.",
      },
      {
        id: "3",
        message:
          "Learn basic sentence structures and practice reading simple sentences.Memorize some of the most common sight words, such as 'the,' 'and,' 'in,' and 'is.' These words occur frequently in English texts.",
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },
  e110200: {
    name: "Listening",
    tips: [
      {
        id: "1",
        message:
          "Begin by listening to simple materials such as songs, nursery rhymes, and short dialogues. You can also listen to podcasts that are designed for beginners.",
      },
      {
        id: "2",
        message:
          "Watch videos with English subtitles, This will help you to connect the written word with the spoken word, making it easier for you to understand what you are hearing.",
      },
      {
        id: "3",
        message:
          "Practice repeating what you hear to improve your pronunciation and speaking skills. ",
      },
      {
        id: "4",
        message:
          "Consistent practice is key to improving your listening skills. Make listening to English-speaking sources a regular part of your daily routine, even if it's just for a few minutes each day. ",
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },
  e110300: {
    name: "Writing",
    tips: [
      {
        id: "5",
        message: "Chat in English with people who knows English.",
      },
      {
        id: "1",
        message:
          "Start by learning the basic rules of English grammar, such as parts of speech, tenses, and sentence structure. This will help you write grammatically correct sentences and improve your overall writing skills.",
      },
      {
        id: "2",
        message:
          "Writing regularly will help you hone your skills and develop your own writing style. Start with simple exercises like writing a paragraph or a short story, and gradually move on to more complex writing tasks.",
      },
      {
        id: "3",
        message:
          "Editing is an essential part of the writing process. After you have written a draft, go back and revise it for clarity, coherence, and correctness. Look for common errors like spelling mistakes, punctuation errors, and grammatical errors.",
      },
      {
        id: "4",
        message:
          "Ask a person who knows English to review your writing and provide feedback. You can also join writing groups or find writing partners online to exchange feedback and support.",
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },
  e110400: {
    name: "Speaking",
    tips: [
      {
        id: "1",
        message:
          "The more you speak English, the more confident you will become. Find a language partner, or join a language exchange program to practice regularly.",
      },
      {
        id: "2",
        message:
          " Making mistakes is a natural part of the learning process. Don't let fear of making mistakes hold you back from speaking.",
      },
      {
        id: "3",
        message:
          "Watch English-language movies and TV shows, this can help you learn conversational English and improve your listening skills.",
      },
      {
        id: "4",
        message:
          "Listen to English as much as possible, whether it's in person, on the radio, or online. Practice speaking by repeating what you hear and trying to imitate the pronunciation.",
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },
  e210100: {
    name: "Reading",
    tips: [
      {
        id: "1",
        message:
          "Joining a group of other English learners can provide a supportive environment to practice your reading skills and discuss what you've learned.",
      },
      {
        id: "2",
        message:
          "Reading out loud can help improve your pronunciation and fluency, as well as your comprehension of the text.",
      },
      {
        id: "3",
        message:
          " Keep a dictionary handy while you read to help you look up unfamiliar words. This can help you expand your vocabulary and understanding of the language.",
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },
  e210200: {
    name: "Listening",
    tips: [
      {
        id: "1",
        message:
          "Focus your attention on the speaker and actively trying to understand what they're saying. Avoid multitasking while listening to English, as this can distract you from the task at hand.",
      },
      {
        id: "2",
        message:
          "If you're struggling to keep up with a conversation, take notes of key points or phrases. This can help you to remember important information and also provide a reference for later.",
      },
      {
        id: "3",
        message:
          "Consistent practice is key to improving your listening skills. Make it a habit to listen to English audio material every day, whether it's a podcast, news broadcast, or an audiobook.",
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },
  e210300: {
    name: "Writing",
    tips: [
      {
        id: "1",
        message:
          " Writing is a skill that can only be developed through practice. Try to write regularly, whether it be daily journal entries or essays on various topics. Don't worry about perfection at first, focus on getting your ideas down on paper.",
      },
      {
        id: "2",
        message:
          "Understanding sentence structure is important for writing clear and concise sentences. Learn about subject-verb agreement, punctuation rules, and sentence connectors such as conjunctions and transitional phrases.",
      },
      {
        id: "3",
        message:
          "Learning grammar and vocabulary is essential for writing in English. Study the rules of grammar and practice using new vocabulary in your writing.",
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },
  e210400: {
    name: "Speaking",
    tips: [
      {
        id: "1",
        message:
          "Pronunciation is essential for effective communication. Try to practice your pronunciation regularly.",
      },
      {
        id: "2",
        message:
          "Learn new words and phrases every day. Try to use them in your conversations to help you remember them.",
      },
      {
        id: "3",
        message:
          "Don't be afraid to make mistakes when speaking English. Focus on communicating your message, and try to use the vocabulary and grammar you have learned.",
      },
      {
        id: "4",
        message:
          "Consistent practice is essential for improving your English speaking skills. Try to speak English every day, even if it's just for a few minutes.",
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },
  e310100: {
    name: "Reading",
    tips: [
      {
        id: "1",
        message:
          "Read advanced English books and articles to expand vocabulary and comprehension. Practice reading and understanding complex sentence structures and grammar rules.",
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },
  e310200: {
    name: "Listening",
    tips: [
      {
        id: "1",
        message: `Listen to advanced English podcasts, news, and lectures without subtitles or transcripts. Practice understanding and responding to complex English conversations`,
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },
  e310300: {
    name: "Writing",
    tips: [
      {
        id: "1",
        message: `Practice writing advanced essays and reports in English. Learn how to write in different English styles, such as academic and technical`,
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },
  e310400: {
    name: "Reading",
    tips: [
      {
        id: "1",
        message: `Practice complex English conversations and debates with a language partner. Learn how to use advanced English expressions and idioms`,
      },
    ],
    resources: [
      { id: "1", name: "Duolingo", link: "https://www.duolingo.com/" },
      { id: "2", name: "Memrise", link: "https://www.memrise.com/" },
      {
        id: "3",
        name: "Grammarly",
        link: "https://www.grammarly.com/grammar-check",
      },
    ],
  },

  a120100: {
    name: "Agile ",
    tips: [
      {
        id: "1",
        message:
          " You don't have to be working on an agile project to practice agile principles. Use agile principles to plan your personal projects and track your progress. This will help you understand the methodology better and apply it in your work.",
      },
      {
        id: "2",
        message:
          "The best way to learn agile is to work on an agile project. Join HiTalent team that is already practicing agile and participate in daily stand-up meetings,  planning sessions, and retrospectives",
      },
      {
        id: "3",
        message:
          "Agile is all about continuous improvement. Be open to feedback and be willing to make changes to improve your progress.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube Hindi Video",
        link: "https://www.youtube.com/watch?v=Xs6E-MAJbfE",
      },
      {
        id: "2",
        name: "Youtube English Video",
        link: "https://www.youtube.com/watch?v=Z9QbYZh1YXY",
      },
      {
        id: "3",
        name: "Agile 101",
        link: "https://www.easyagile.com/blog/agile-101/",
      },
    ],
  },
  a120200: {
    name: "Jira",
    tips: [
      {
        id: "1",
        message: "Kanban is good enough to beginner.",
      },
      {
        id: "2",
        message:
          "Begin by understanding the basic features of Jira, such as creating issues, adding comments, and assigning tasks to team members.",
      },
      {
        id: "3",
        message:
          "The best way to learn Jira is to use it. Create a test project, experiment with different features, and practice using the software regularly.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube Hindi Video",
        link: "https://youtube.com/watch?v=HzJzB0nQYlk",
      },
    ],
  },
  a120300: {
    name: "Create Account in Jira",
    tips: [
      {
        id: "1",
        message: "Go through jira official guides and tutorials",
      },
      {
        id: "2",
        message: "Keep patience to learn anything and practice more.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Official Jira Guides",
        link: "https://www.atlassian.com/software/jira/guides/getting-started/introduction#what-is-jira-software",
      },
      {
        id: "2",
        name: "Google Document Guide",
        link: "https://docs.google.com/document/d/1w0X-MecqBXPVbgNm5yRcdaFAs7c7c8SzI7gzEanaTyw/edit?usp=sharing",
      },
    ],
  },
  a220100: {
    name: "Create an issue in Jira",
    tips: [
      {
        id: "1",
        message:
          "Write a brief but clear summary that accurately describes the issue you're experiencing. This will help others quickly understand what the issue is about.",
      },
      {
        id: "2",
        message:
          "If there are related issues, provide links to them in the description to help others understand the context of the issue.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Official Jira Guides",
        link: "https://www.atlassian.com/software/jira/guides/getting-started/basics#step-4-create-an-issue:~:text=Step%204%20%2D-,Create%20an%20issue,-Issues%20are%20the",
      },
    ],
  },
  a220200: {
    name: "Make habit",
    tips: [
      {
        id: "1",
        message:
          "Create issues for every task of the day for every week and set goal to complete in how many days.",
      },
    ],
  },
  g130100: {
    name: "Installation and Configuration of Git",
    tips: [
      {
        id: "1",
        message:
          " Choose the appropriate version for your operating system and follow the installation instructions.",
      },
      {
        id: "2",
        message:
          "After installing Git, you need to configure it with your personal information, including your name and email address.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Install Git on Windows",
        link: "https://www.atlassian.com/git/tutorials/install-git#:~:text=with%20Bitbucket%20Cloud-,Install%20Git%20on%20Windows,-Git%20for%20Windows",
      },
      {
        id: "2",
        name: "Install Git on Linux",
        link: "https://www.atlassian.com/git/tutorials/install-git#:~:text=with%20Bitbucket%20Cloud-,Install%20Git%20on%20Linux,-Debian%20/%20Ubuntu%20(apt",
      },
      {
        id: "3",
        name: "Git Download",
        link: "https://git-scm.com/downloads",
      },
      {
        id: "4",
        name: "Git Configuration",
        link: " https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup",
      },
    ],
  },
  g130200: {
    name: "Create Repository",
    tips: [
      {
        id: "1",
        message: "Create a Git repository from github and command crompt",
      },
      {
        id: "2",
        message:
          " Don't get discouraged if you don't see immediate progress. Keep practicing consistently and you will see improvement over time.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Git repo",
        link: "https://docs.github.com/en/get-started/quickstart/create-a-repo",
      },
    ],
  },
  g130300: {
    name: "Clone",
    tips: [
      {
        id: "1",
        message: "Clone a git repo into local and start working in it.",
      },
      {
        id: "2",
        message:
          " Always make a repository for every small or large project and add all code in it.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Git clone",
        link: "https://github.com/git-guides/git-clone",
      },
    ],
  },
  g130400: {
    name: "Add",
    tips: [
      {
        id: "1",
        message:
          "After a small changes made in files present in repository folder, git add should be done.",
      },
      {
        id: "2",
        message: "Check how to use git add in VS Code git extension.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Git add",
        link: "https://www.javatpoint.com/git-add",
      },
    ],
  },
  g130500: {
    name: "Commit",
    tips: [
      {
        id: "1",
        message:
          "Ideally, your commit message should be no more than 50 characters long. This helps keep the message concise and easy to read.",
      },
      {
        id: "2",
        message: "Check how to use git commit in VS Code git extension.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Git commit",
        link: "https://www.javatpoint.com/git-commit",
      },
    ],
  },
  g130600: {
    name: "Push",
    tips: [
      {
        id: "4",
        message:
          "Before pushing your changes, review them carefully to make sure they are correct and complete. ",
      },
      {
        id: "1",
        message:
          "Before pushing your changes, make sure you have committed them to your local repository. This helps to keep your changes organized and makes it easier to track changes over time.",
      },
      {
        id: "2",
        message:
          "Make sure you are pushing your changes to the correct branch in the remote repository.",
      },
      {
        id: "3",
        message: "Check how to use git push in VS Code git extension.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Git push",
        link: "https://www.javatpoint.com/git-push",
      },
    ],
  },
  g130700: {
    name: "Pull",
    tips: [
      {
        id: "1",
        message:
          "Before you run git pull, make sure you are on the correct branch ",
      },
      {
        id: "2",
        message:
          "Check how to use git pull in VS Code git extension or terminal.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Git push",
        link: "https://www.javatpoint.com/git-pull",
      },
    ],
  },
  programLang: {
    name: "Choose Programming Language",
    tips: [
      {
        id: "1",
        message: "Discuss with mentor and choose wisely.",
      },
      {
        id: "2",
        message:
          "If you are primarily interested in web development, then JavaScript is likely the better choice and can be more challenging to learn due to its asynchronous nature.",
      },
      {
        id: "3",
        message:
          "If you need to perform data analysis or machine learning tasks, then Python is probably the better choice. Python has a relatively gentle learning curve, making it an excellent choice for beginners. ",
      },
    ],
    resources: [
      {
        id: "1",
        name: "JavaScript vs Python",
        link: "https://www.simplilearn.com/tutorials/programming-tutorial/javascript-vs-python",
      },
    ],
  },
  courseLang: {
    name: "Choose Programming Language",
    tips: [
      {
        id: "1",
        message:
          "If you are more comfortable with Hindi and have a better understanding of the language, then watching courses in Hindi may be more beneficial for you. On the other hand, if you are more comfortable with English and can understand the language well, then watching courses in English may be a better option.",
      },
      {
        id: "2",
        message:
          "If you plan to work in a field where English is the primary language of communication, then watching courses in English may be more beneficial for you in the long run.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Duolingo",
        link: "https://www.duolingo.com/",
      },
    ],
  },
  py150201: {
    name: "Hindi Course",
    tips: [
      {
        id: "1",
        message:
          "Complete this video and write code in VS Code when video playing. ",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube Video Link",
        link: "https://www.youtube.com/watch?v=gfDE2a7MKjA",
      },
    ],
  },
  py150202: {
    name: "English Course",
    tips: [
      {
        id: "1",
        message:
          "Complete this video and write code in VS Code when video playing. ",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube Video Link",
        link: "https://www.youtube.com/watch?v=XKHEtdqhLK8",
      },
    ],
  },
  g230100: {
    name: "Branches",
    tips: [
      {
        id: "1",
        message:
          "Create and switch between branches, Merge branches, Resolve merge conflicts.",
      },
      {
        id: "2",
        message:
          "Your master branch should always reflect the stable version of your code. Try to avoid making changes directly to the master branch, and instead create a new branch for each new feature or bug fix.",
      },
      {
        id: "3",
        message:
          "When creating a new branch, use a descriptive name that reflects the purpose of the branch. This will make it easier for you and your team members to identify the purpose of each branch.",
      },
      {
        id: "4",
        message:
          "It's a good practice to merge your changes frequently with the master branch, especially if you are working on a long-lived feature branch. This will help to prevent merge conflicts and make it easier to track changes.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Using Branches",
        link: "https://www.atlassian.com/git/tutorials/using-branches",
      },
      {
        id: "2",
        name: "Google Document",
        link: "https://docs.google.com/document/d/1HkmJbES2VBw2xPP-NvAwC83RIESSXu0Q48ahN8DjOl4/edit?usp=sharing",
      },
      {
        id: "3",
        name: "Git Branching",
        link: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",
      },
    ],
  },
  g230200: {
    name: " Remote Repositories",
    tips: [
      {
        id: "1",
        message:
          "Clone a remote repository, Pull changes from a remote repository, Push changes to a remote repository",
      },
      {
        id: "2",
        message:
          "Helpful in sharing code with other developers who are working on the same project, can backup your code and when working on a project with multiple developers, each developer can work on their own copy of the repository and push changes to a remote repository.",
      },
      {
        id: "3",
        message:
          "Always fetch the latest changes from the remote repository before you start working on your local copy. This ensures that you have the latest changes from other contributors and helps to prevent conflicts.",
      },
      {
        id: "3",
        message:
          "When you're ready to merge your changes into the main branch, create a pull request and ask another contributor to review your changes. This helps to catch any mistakes or bugs before they're merged into the main branch.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Git Remote",
        link: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes",
      },
    ],
  },
  g230300: {
    name: "Undoing Changes",
    tips: [
      {
        id: "1",
        message:
          "Discard changes in the working directory, Revert changes in the commit history",
      },
      {
        id: "2",
        message:
          "Always double-check which changes you are undoing before executing any of these commands, as they can have unintended consequences if used improperly.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Git Undoing Changes",
        link: "https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things",
      },
      {
        id: "2",
        name: "Atlassian - Undoing Changes",
        link: "https://www.atlassian.com/git/tutorials/undoing-changes",
      },
    ],
  },
  g230400: {
    name: "Advanced Branching",
    tips: [
      {
        id: "1",
        message:
          "Rename and delete branches, Create and use tags, Use git stash.",
      },
      {
        id: "2",
        message:
          "Advanced Git branching can be very useful in managing complex workflows and branching strategies.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Git Branching ",
        link: "https://git-scm.com/book/en/v2/Git-Branching-Branch-Management",
      },
    ],
  },
  g201: {
    name: "Collaborating with Others",
    tips: [
      {
        id: "1",
        message:
          "Fork and clone a remote repository, Create pull requests, Resolve merge conflicts in a pull request",
      },
      {
        id: "2",
        message:
          "Create separate branches for different features or bug fixes, so each collaborator can work on their own branch without interfering with others. Keep in touch with other collaborators and communicate frequently about the work being done.",
      },
      {
        id: "3",
        message:
          " Before merging changes into the main branch, make sure to review code changes carefully. Ensure that the codebase is clean and easy to understand.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "GitHub Collaboration ",
        link: "https://guides.github.com/activities/hello-world/",
      },
      {
        id: "2",
        name: "what-is-collaboration-in-giT?",
        link: "https://www.geeksforgeeks.org/what-is-collaboration-in-git/",
      },
    ],
  },
  g300: {
    name: "Github issues and pull requests",
    tips: [
      {
        id: "1",
        message:
          "Use labels to categorize issues and make it easier to track them. For example, you can use labels such as 'bug,enhancement or documentation' to help your collaborators understand the nature of the issue.",
      },
      {
        id: "2",
        message:
          "Work on separate branches to avoid conflicts with other contributors. ",
      },
      {
        id: "3",
        message:
          "When collaborating with others, it's important to be responsive and available to answer questions or address concerns.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube video",
        link: "https://www.youtube.com/watch?v=LuL60r-XnL4",
      },
    ],
  },
  g230500: {
    name: " Test",
    tips: [
      {
        id: "1",
        message:
          "Make sure you have learnt basic and intermediate Git and we will take a test.",
      },
    ],
  },
  track: {
    name: "Frontend/Backend/FullStack",
    tips: [
      {
        id: "1",
        message:
          "Understand what is frontend and backend and fullstack development and choose wisely based on confidence you have in your skills.  ",
      },
      {
        id: "2",
        message:
          "Frontend developers focus on building the user-facing part of web applications, including the design, layout, and functionality of the interface that users interact with. They typically use HTML, CSS, and JavaScript to create dynamic web pages that are responsive and user-friendly.",
      },
      {
        id: "3",
        message:
          "Backend developers, on the other hand, focus on building the server-side of web applications. They handle the logic, data storage, and security of the application, and typically use languages like Python, Java, Ruby, or PHP to build APIs and server-side code that connects the frontend to the database and other services.",
      },
      {
        id: "4",
        message:
          "Full stack developers are capable of working on both the frontend and backend of a web application. They have a broad understanding of web development technologies and can handle tasks ranging from building UIs to managing databases and servers. Full stack developers are often preferred by small teams and startups because they can work on multiple parts of the project, making it easier to manage resources and streamline development.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Frontend vs Backend vs FullStack (Simplilearn)",
        link: "https://www.youtube.com/watch?v=LuL60r-XnL4",
      },
    ],
  },
  py150203: {
    name: "Data Types",
    tips: [
      {
        id: "1",
        message:
          " Make sure you understand what each of these data types is and how to work with them",
      },
      {
        id: "2",
        message:
          "Python allows you to convert data between different types. However, be mindful of the potential loss of precision or unexpected results when converting between certain types. ",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools",
        link: "https://www.w3schools.com/python/python_datatypes.asp",
      },
      {
        id: "2",
        name: "Digital Ocean Python Tutorial",
        link: "https://www.digitalocean.com/community/tutorials/python-data-types",
      },
    ],
  },
  py150204: {
    name: "Variables",
    tips: [
      {
        id: "1",
        message: (
          <pre className="font-serif">
            When you create a variable, choose a name that describes what the
            variable represents{" "}
            {aTag(
              "https://www.w3schools.com/python/python_variables_names.asp"
            )}
            . You can assign multiple variables too{" "}
            {aTag(
              "https://www.w3schools.com/python/python_variables_multiple.asp"
            )}
            . Here is how to use print statement which gives output of
            variables.{" "}
            {aTag(
              "https://www.w3schools.com/python/python_variables_output.asp"
            )}
          </pre>
        ),
      },
      {
        id: "2",
        message:
          "Unlike some other programming languages, you don't need to declare the data type of a variable in Python.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools(Variables)",
        link: "https://www.w3schools.com/python/python_variables.asp",
      },
    ],
  },
  py150205: {
    name: "Booleans",
    tips: [
      {
        id: "1",
        message:
          "Python will automatically convert them to a Boolean value using a process called 'truthiness'. For example, empty lists, tuples, and dictionaries are considered False, while non-empty ones are considered True.",
      },
      {
        id: "2",
        message:
          "You can use the bool() function to explicitly convert a value to a Boolean.In Python, None is considered False.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools",
        link: "https://www.w3schools.com/python/python_booleans.asp",
      },
    ],
  },
  py150206: {
    name: "Strings",
    tips: [
      {
        id: "1",
        message:
          "String methods are too important in Python, it is good to know all of them. ",
      },
      {
        id: "2",
        message:
          "Important topics are String Operations, String Indexing and Slicing, String Formatting",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Strings",
        link: "https://www.w3schools.com/python/python_strings.asp",
      },
      {
        id: "2",
        name: "String methods (You can click on each method to see with examples.)",
        link: "https://www.w3schools.com/python/python_strings_methods.asp",
      },
    ],
  },
  py150207: {
    name: "Basic operators",
    tips: [
      {
        id: "1",
        message:
          "Basic operators can be used to compare values and return Boolean values.",
      },
      {
        id: "2",
        message:
          " In Python, non-Boolean values can also be evaluated for their truthiness.  For example, an empty list or an empty string evaluates as False, while a non-empty list or a non-empty string evaluates as True.",
      },
      {
        id: "3",
        message:
          "Learn difference between Logical operators and comparision operators.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools",
        link: "https://www.w3schools.com/python/python_booleans.asp",
      },
    ],
  },
  py150208: {
    name: "If/else conditions",
    tips: [
      {
        id: "1",
        message:
          "Ternary Operators,Chained Comparisons, You can write condition in one line if there is only one condition",
      },
      {
        id: "2",
        message:
          "Nested If-Else Statements(Conditional statements) in Python are used to execute different blocks of code depending on whether a certain condition is true or false.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools",
        link: "https://www.w3schools.com/python/python_conditions.asp",
      },
    ],
  },
  py150209: {
    name: "Lists vs Arrays",
    tips: [
      {
        id: "1",
        message:
          "Lists and arrays are same but Lists can store any data type values but arrays can store only one datatype. Check below resource.",
      },
      {
        id: "2",
        message:
          "List methods are too important in Python, you will use it many places.",
      },
      {
        id: "3",
        message:
          "Important topics are Creating Lists and Arrays, Accessing  Items, Modifying  Items, Slicing Lists/Arrays",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Arrays vs Lists",
        link: "https://www.freecodecamp.org/news/python-array-tutorial-define-index-methods/",
      },
      {
        id: "2",
        name: "Lists",
        link: "https://www.w3schools.com/python/python_lists.asp",
      },
      {
        id: "2",
        name: "List methods",
        link: "https://www.w3schools.com/python/python_lists_methods.asp",
      },
    ],
  },
  py150210: {
    name: "Dictionaries",
    tips: [
      {
        id: "1",
        message:
          "Important topics are Creating a dictionary, Accessing values in a dictionary, Adding or updating key-value pairs, Removing key-value pairs, Checking if a key is in a dictionary. ",
      },
      {
        id: "2",
        message:
          "Make sure you learn dictionary methods too which are important and which makes easy.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Dictionaries",
        link: "https://www.w3schools.com/python/python_dictionaries.asp",
      },
      {
        id: "2",
        name: "Dictionary methods",
        link: "https://www.w3schools.com/python/python_dictionaries_methods.asp",
      },
    ],
  },
  py250208: {
    name: "Sets and Tuples",
    tips: [
      {
        id: "1",
        message:
          "Python sets support a variety of operations, including union, intersection, and difference.",
      },
      {
        id: "2",
        message:
          "Tuples are ordered sequences of elements, similar to lists, but are immutable. Once a tuple is created, it cannot be modified.",
      },
      {
        id: "2",
        message:
          "Makle sure to learn slicing of Lists, Arrays, Dictionaries, Sets, Tuples.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools (Sets) ",
        link: "https://www.w3schools.com/python/python_sets.asp",
      },
      {
        id: "2",
        name: "W3Schools (Set methods) ",
        link: "https://www.w3schools.com/python/python_sets_methods.asp",
      },
      {
        id: "2",
        name: "W3Schools (Tuples) ",
        link: "https://www.w3schools.com/python/python_tuples.asp",
      },
    ],
  },
  py250201: {
    name: "Control Flow and Conditional Statements",
    tips: [
      {
        id: "2",
        message:
          " The break statement is used to exit a loop prematurely, while the continue statement is used to skip an iteration of a loop. These statements can be very useful for controlling the flow of your code.",
      },
      {
        id: "3",
        message:
          "Global variables can make your code difficult to understand and debug. Instead, try to use local variables or function arguments.",
      },
      {
        id: "4",
        message:
          " If you have a simple if-else statement, you can use the ternary operator to make your code more concise.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "What are control flow statements in Python? ",
        link: "https://www.educative.io/answers/what-are-control-flow-statements-in-python",
      },
      {
        id: "2",
        name: "python-if-else",
        link: "https://www.geeksforgeeks.org/python-if-else/",
      },
      {
        id: "2",
        name: "Control Flow Statements",
        link: "https://pynative.com/python-control-flow-statements/#:~:text=statement%20in%20Python-,Control%20Flow%20Statements,-The%20flow%20control",
      },
    ],
  },
  py250202: {
    name: "For Loops",
    tips: [
      {
        id: "1",
        message:
          "Use a for loop when iterating over a sequence like a list or a string, and use a while loop when you need to loop until a condition is met.",
      },
      {
        id: "2",
        message:
          "Be careful with infinite loops! Always make sure that your loop has a way to end, whether it's a specified number of iterations or a conditional statement.",
      },
      {
        id: "3",
        message:
          "You can use the break statement to exit a loop early if a certain condition is met.You can use the continue statement to skip over certain iterations of a loop based on a condition.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools (for_loops) ",
        link: "https://www.w3schools.com/python/python_for_loops.asp",
      },
      {
        id: "2",
        name: "Python for Loop",
        link: "https://www.programiz.com/python-programming/for-loop#:~:text=while%20loop-,Python%20for%20Loop,-In%20Python%2C%20the",
      },
    ],
  },
  py250203: {
    name: "While Loops",
    tips: [
      {
        id: "1",
        message:
          " A while loop will continue to run as long as the condition is True. If the condition never becomes False, the loop will continue indefinitely, which can lead to an infinite loop.",
      },
      {
        id: "2",
        message:
          "If you need to keep track of how many times a loop has run, use a counter variable that you increment inside the loop.",
      },
      {
        id: "2",
        message:
          "In many cases, a for loop is a better choice than a while loop. For example, if you need to iterate over a range of numbers, you can use a for loop with the range function, rather than using a while loop and a counter variable.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools (while_loops) ",
        link: "https://www.w3schools.com/python/python_while_loops.asp",
      },
      {
        id: "2",
        name: "Python while Loop",
        link: "https://www.programiz.com/python-programming/while-loop#:~:text=loop.-,Python%20while%20Loop,-Python",
      },
    ],
  },
  py250204: {
    name: "Funtions , Scopes",
    tips: [
      {
        id: "3",
        message: (
          <pre className="font-serif">
            Python Built-in functions are more often used to code easier.{" "}
            {aTag("https://www.w3schools.com/python/python_ref_functions.asp")}
          </pre>
        ),
      },
      {
        id: "1",
        message:
          "Python does not support function overloading, where multiple functions can have the same name but different parameters. However, you can use default parameter values and variable-length arguments to achieve similar functionality.",
      },
      {
        id: "2",
        message:
          "Important topics are Defining a Function, Parameters in function, Return Values, Variable Scope in function, Lambda Functions, Recursion Funcitons.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools (Functions)",
        link: "https://www.w3schools.com/python/python_functions.asp",
      },
      {
        id: "2",
        name: "W3Schools (Lambda Functions)",
        link: "https://www.w3schools.com/python/python_lambda.asp",
      },
      {
        id: "3",
        name: "W3Schools (Scopes)",
        link: "https://www.w3schools.com/python/python_scope.asp",
      },
    ],
  },
  py250205: {
    name: "List Methods",
    tips: [
      {
        id: "1",
        message: "Make sure to learn and practice all list methods.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools (List methods) ",
        link: "https://www.w3schools.com/python/python_ref_list.asp",
      },
    ],
  },
  py250206: {
    name: "Dictionary Methods",
    tips: [
      {
        id: "1",
        message:
          "Make sure to learn and practice all dictionary methods as well.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools (dictionary methods) ",
        link: "https://www.w3schools.com/python/python_ref_dictionary.asp",
      },
    ],
  },
  py250207: {
    name: " Exception Handling",
    tips: [
      {
        id: "1",
        message:
          "To handle exceptions, use a try-except block. The code inside the try block is executed first. If there is an exception, it is caught by the except block and the corresponding exception handling code is executed.",
      },
      {
        id: "2",
        message:
          "Don't catch every exception in your program. Catching all exceptions can lead to errors being silently ignored, making it difficult to identify and resolve issues.",
      },
      {
        id: "3",
        message:
          " Catching specific exceptions can make your code more precise and easier to read. You can catch specific exceptions by specifying the exception type in the except block.",
      },
      {
        id: "4",
        message:
          "You can raise your own exceptions using the raise statement. This can be useful for handling specific errors or for creating custom error messages.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Python Exception Handling ",
        link: "https://www.geeksforgeeks.org/python-exception-handling/",
      },
      {
        id: "2",
        name: "W3Schools (python_try_except) ",
        link: "https://www.w3schools.com/python/python_try_except.asp",
      },
      {
        id: "3",
        name: "W3Schools (python_error_handling) ",
        link: "https://www.w3schools.com/python/gloss_python_error_handling.asp",
      },
    ],
  },
  b27010101: {
    name: "Introduction and Installation",
    tips: [
      {
        id: "1",
        message:
          "Learn one SQL Database(PostgreSQL) and one NoSQL Database(MongoDB)",
      },
    ],
    resources: [
      {
        id: "3",
        name: "what-is-database? ",
        link: "https://www.scaler.com/topics/dbms/what-is-database/",
      },
      {
        id: "1",
        name: "Install PostgreSQL on Windows",
        link: "https://www.postgresqltutorial.com/install-postgresql/",
      },
      {
        id: "2",
        name: "Install PostgreSQL on Ubuntu ",
        link: "https://www.postgresqltutorial.com/install-postgresql-linux/",
      },
      {
        id: "4",
        name: "what-is-postgresql?",
        link: "https://www.postgresqltutorial.com/what-is-postgresql/",
      },
      {
        id: "5",
        name: "MongoDB",
        link: "https://www.w3schools.com/mongodb/",
      },
    ],
  },
  b27010102: {
    name: "Creating and Managing Database",
    tips: [
      {
        id: "1",
        message:
          " Before creating a database, it's important to identify your data needs, what data you want to store, how it will be organized, and what kind of queries you need to perform.",
      },
      {
        id: "2",
        message:
          "A schema is a blueprint that outlines the structure of your database. It should include tables, columns, and relationships between tables. Make sure to create a clear and concise schema that accurately represents your data.",
      },
      {
        id: "3",
        message:
          "Learn Creating Database, Creating Tables and Users in Database, Querying Data(Select , Order By , Select Distinct ), Filtering Data (Where, Limit, Like , In )",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Filtering Data (PostgreSQL)",
        link: "https://www.postgresqltutorial.com/#:~:text=Section%202.-,Filtering%20Data,-Where%C2%A0%E2%80%93%20filter%20rows",
      },
      {
        id: "2",
        name: " Querying Data (PostgreSQL)",
        link: "https://www.postgresqltutorial.com/#:~:text=Section%201.-,Querying%20Data,-Select%C2%A0%E2%80%93%20show%20you",
      },
      {
        id: "3",
        name: "W3Schools (mongodb) ",
        link: "https://www.w3schools.com/mongodb/",
      },
    ],
  },
  b27020100: {
    name: "FastAPI Courses",
    tips: [
      {
        id: "1",
        message: "Complete this video courses to understand more detail.",
      },
      {
        id: "2",
        message:
          "When watching video , please write code in VS Code and execute it as tutor does and understand it.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube English Course 1",
        link: "https://www.youtube.com/watch?v=7t2alSnE2-I",
      },
      {
        id: "2",
        name: "Youtube English Course 2",
        link: "https://www.youtube.com/watch?v=GN6ICac3OXY",
      },
    ],
  },
  b27020101: {
    name: "Basics of API",
    tips: [
      {
        id: "1",
        message:
          "Learn about API basics and RESTful architecture. What is API and REST API?",
      },
      {
        id: "2",
        message:
          "Understand HTTP methods (GET, POST, PUT, DELETE, etc.) and their use in API development.Create an API endpoint that returns a JSON response.Handle requests with FastAPI using decorators. Use FastAPI's Request and Response classes",
      },
    ],
    resources: [
      {
        id: "1",
        name: "What is an API?",
        link: "https://www.dataquest.io/blog/python-api-tutorial/#:~:text=API%20tutorial.-,What%20is%20an%20API%3F,-An%20API%2C%20or",
      },
    ],
  },
  b27020102: {
    name: "Query Parameters and Path Parameters",
    tips: [
      {
        id: "1",
        message:
          "Learn about query parameters and path parameters. Create endpoints that handle query parameters and path parameters",
      },
      {
        id: "2",
        message:
          "Understand how to use the optional and required parameters in FastAPI",
      },
    ],
    resources: [
      {
        id: "1",
        name: "An Endpoint With Path Params",
        link: "https://christophergs.com/tutorials/ultimate-fastapi-tutorial-pt-2-url-path-parameters/#:~:text=An%20Endpoint%20With%20Path%20Params",
      },
      {
        id: "2",
        name: "An Endpoint With Query Params",
        link: "https://christophergs.com/tutorials/ultimate-fastapi-tutorial-pt-3-query-parameters/#:~:text=Practical%20Section%20%2D-,An%20Endpoint%20With%20Query%20Params,-If%20you%20haven%E2%80%99t",
      },
    ],
  },
  b27020103: {
    name: "Data Models and Pydantic",
    tips: [
      {
        id: "1",
        message:
          " Pydantic models can be used to validate request bodies and responses in FastAPI routes. This can help catch errors early on and ensure that data is properly formatted.",
      },
      {
        id: "2",
        message:
          "FastAPI natively supports asynchronous code, which can provide significant performance improvements for I/O-bound tasks such as accessing a database or making HTTP requests.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube Video",
        link: "https://www.youtube.com/watch?v=GkrDmUEEEtM",
      },
      {
        id: "2",
        name: "Introduction to Pydantic",
        link: "https://christophergs.com/tutorials/ultimate-fastapi-tutorial-pt-4-pydantic-schemas/#:~:text=Pydantic%20with%20FastAPI-,Introduction%20to%20Pydantic,-Pydantic%20describes%20itself",
      },
    ],
  },
  b27020104: {
    name: "Basics of CRUD",
    tips: [
      {
        id: "1",
        message:
          "CRUD stands for Create, Read, Update, and Delete, which are the four basic operations.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Building a REST API in FastAPI + PostgreSQL",
        link: "https://www.youtube.com/watch?v=d_ugoWsvGLI",
      },
    ],
  },
  b27020105: {
    name: "Error Handling and Exception Handling",
    tips: [
      {
        id: "1",
        message:
          "Understand how to handle errors and exceptions in FastAPI. Use the HTTPException class to raise errors. Create custom exception handlers",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Adding Basic Error Handling",
        link: "https://christophergs.com/tutorials/ultimate-fastapi-tutorial-pt-5-basic-error-handling/#:~:text=Practical%20Section%20%2D-,Adding%20Basic%20Error%20Handling,-If%20you%20haven%E2%80%99t",
      },
      {
        id: "2",
        name: "How do I integrate custom exception handling with the FastAPI exception handling?        ",
        link: "https://stackoverflow.com/a/72833281",
      },
    ],
  },
  b270201033: {
    name: "Requests",
    tips: [
      {
        id: "1",
        message: "Understand requests and response along with status code.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Python Requests ",
        link: "https://www.w3schools.com/python/module_requests.asp",
      },
      {
        id: "2",
        name: "How to Use Python Requests with REST APIs?",
        link: "https://www.nylas.com/blog/use-python-requests-module-rest-apis/",
      },
    ],
  },
  b27030101: {
    name: "Introduction to Node.js and its architecture",
    tips: [
      {
        id: "1",
        message: `What is Node.js and why use it? Node.js architecture and how it works. Installing Node.js and NPM`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "nodejs_intro",
        link: "https://www.w3schools.com/nodejs/nodejs_intro.asp",
      },
      {
        id: "2",
        name: "nodejs_get_started",
        link: "https://www.w3schools.com/nodejs/nodejs_get_started.asp",
      },
    ],
  },
  b27030102: {
    name: "Understanding Node.js modules",
    tips: [
      {
        id: "1",
        message: `What are Node.js modules? Using built-in modules. Creating custom modules`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "CommonJS vs. ES modules in Node.js ",
        link: "https://blog.logrocket.com/commonjs-vs-es-modules-node-js/#:~:text=African%20in%20Tech.-,CommonJS%20vs.%20ES%20modules%20in%20Node.js,-December%2029%2C%202021",
      },
    ],
  },
  b27030103: {
    name: "Node.js file system and streams",
    tips: [
      {
        id: "1",
        message:
          "One of the key features of Node.js file system module is its support for streams, which allow you to read or write large files efficiently in small chunks, rather than loading the entire file into memory at once. Streams can be used for both reading and writing files.",
      },
      {
        id: "2",
        message: `Learn Working with the file system module. Introduction to streams and buffers`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "fs-extra",
        link: "https://www.npmjs.com/package/fs-extra",
      },
    ],
  },
  b27030104: {
    name: "Asynchronous programming with Node.js",
    tips: [
      {
        id: "1",
        message: `Understanding asynchronous programming. Callback functions and their use in Node.js. Promises and async/await`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "Callback function",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function#:~:text=See%20also-,Callback%20function,-A%20callback%20function",
      },
      {
        id: "2",
        name: "How to Create Promises in JavaScript?",
        link: "https://www.freecodecamp.org/news/javascript-promises-for-beginners/#:~:text=How%20to%20Create%20Promises%20in%20JavaScript",
      },
      {
        id: "3",
        name: "Difference between promise and async await in Node.js",
        link: "https://www.geeksforgeeks.org/difference-between-promise-and-async-await-in-node-js/#:~:text=fs.readFile()%20Method-,Difference%20between%20promise%20and%20async%20await%20in%20Node.js,-Difficulty%20Level%20%3A",
      },
    ],
  },
  b27030105: {
    name: "Node.js and HTTP",
    tips: [
      {
        id: "1",
        message:
          "Understanding HTTP requests and responses. Creating a simple HTTP server with Node.js",
      },
    ],
    resources: [
      {
        id: "1",
        name: "HTTP Module ",
        link: "https://www.geeksforgeeks.org/node-js-http-module/",
      },
      {
        id: "2",
        name: "The Built-in HTTP Module",
        link: "https://www.w3schools.com/nodejs/nodejs_http.asp#:~:text=The%20Built%2Din%20HTTP%20Module",
      },
    ],
  },
  g320100: {
    name: "Collaborating",
    tips: [
      {
        id: "1",
        message:
          "In addition to clear commit messages, it's also helpful to use branches when working on new features or fixing bugs. This allows you to work independently without interfering with other parts of the codebase, and makes it easier to track changes and collaborate with others.",
      },
      {
        id: "1",
        message: `When working with others on a GitHub project, it's important to clearly communicate any changes you make to the code. One way to do this is by writing descriptive commit messages that explain the purpose of your changes. `,
      },
    ],
    resources: [
      {
        id: "1",
        name: "What is Collaboration in Git?",
        link: "https://www.geeksforgeeks.org/what-is-collaboration-in-git/#:~:text=Competitive%20Programming%20Environment-,What%20is%20Collaboration%20in%20Git%3F,-Last%20Updated%20%3A",
      },
      {
        id: "2",
        name: "Collaborating on GitHub",
        link: "https://www.youtube.com/watch?v=MnUd31TvBoU",
      },
    ],
  },
  g320200: {
    name: "Issues and pull requests",
    tips: [
      {
        id: "1",
        message:
          "When creating an issue or a pull request on GitHub, it's important to provide a clear and descriptive title that summarizes the content of your request. This will help other users quickly understand what your request is about and whether it's relevant to them.",
      },
      {
        id: "2",
        message:
          "When describing your request, try to be concise and avoid using technical jargon that may be difficult for others to understand.",
      },
      {
        id: "3",
        message:
          "Provide a detailed description of the problem you're facing or the changes you're proposing.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Github : Issues and Pull Requests ",
        link: "https://www.youtube.com/watch?v=LuL60r-XnL4&t=338s",
      },
    ],
  },
  b270201033: {
    name: "Requests",
    tips: [
      {
        id: "1",
        message: "Understand requests and response along with status code.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Python Requests ",
        link: "https://www.w3schools.com/python/module_requests.asp",
      },
      {
        id: "2",
        name: "How to Use Python Requests with REST APIs?",
        link: "https://www.nylas.com/blog/use-python-requests-module-rest-apis/",
      },
    ],
  },
  b270201033: {
    name: "Requests",
    tips: [
      {
        id: "1",
        message: "Understand requests and response along with status code.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Python Requests ",
        link: "https://www.w3schools.com/python/module_requests.asp",
      },
      {
        id: "2",
        name: "How to Use Python Requests with REST APIs?",
        link: "https://www.nylas.com/blog/use-python-requests-module-rest-apis/",
      },
    ],
  },
  b35010100: {
    name: "Data Persistence",
    tips: [
      {
        id: "1",
        message: "Learn about databases and ORMs",
      },
      {
        id: "2",
        message:
          "Connect FastAPI with databases like PostgreSQL,MongoDB. Understand the basics of SQLAlchemy",
      },
    ],
    resources: [
      {
        id: "1",
        name: "ORMs",
        link: "https://fastapi.tiangolo.com/tutorial/sql-databases/#:~:text=small%20as%20always.-,ORMs,-%C2%B6",
      },
      {
        id: "2",
        name: "Here we will see how to work with SQLAlchemy ORM.",
        link: "https://fastapi.tiangolo.com/tutorial/sql-databases/#:~:text=Here%20we%20will%20see%20how%20to%20work%20with%20SQLAlchemy%20ORM.",
      },
      {
        id: "3",
        name: "Getting Started with MongoDB and FastAPI.",
        link: "https://www.mongodb.com/developer/languages/python/python-quickstart-fastapi/",
      },
    ],
  },
  b35010101: {
    name: "CRUD Operations",
    tips: [
      {
        id: "1",
        message:
          "Learn about CRUD operations. Use FastAPI's built-in CRUD helpers for SQLAlchemy. Understand how to handle SQLAlchemy errors. ",
      },
    ],
    resources: [
      {
        id: "1",
        name: "CRUD Operations | Swagger | PyMongo",
        link: "https://www.youtube.com/watch?v=G7hZlOLhhMY",
      },
      {
        id: "2",
        name: "Fastapi RESTful API CRUD postgresql",
        link: "https://www.youtube.com/watch?v=d_ugoWsvGLI&t=170s",
      },
    ],
  },
  b35010102: {
    name: "Authentication and Authorization",
    tips: [
      {
        id: "1",
        message:
          " Understand the difference between authentication and authorization",
      },
      {
        id: "2",
        message:
          " Use FastAPI's built-in authentication and authorization system. Understand how to use JSON Web Tokens (JWT) for authentication",
      },
    ],
    resources: [
      {
        id: "1",
        name: "What is Authentication?",
        link: "https://www.okta.com/identity-101/authentication-vs-authorization/#:~:text=access%20management%20(IAM).-,What%20Is%20Authentication%3F,-Authentication%20is%20the",
      },
      {
        id: "1",
        name: "What is  Authorization?",
        link: "https://www.okta.com/identity-101/authentication-vs-authorization/#:~:text=alone%20can%20provide.-,What%20Is%20Authorization%3F,-Authorization%20in%20system",
      },
      {
        id: "3",
        name: "Youtube course",
        link: "https://www.youtube.com/watch?v=0_seNFCtglk",
      },
      {
        id: "2",
        name: "JWT Auth Overview",
        link: "https://christophergs.com/tutorials/ultimate-fastapi-tutorial-pt-10-auth-jwt/#:~:text=Endpoints%20%2D%20Login%20Flow-,Theory%20Section%20%2D%20JWT%20Auth%20Overview,-What%20Do%20We",
      },
    ],
  },
  b35010103: {
    name: "Advanced Request Handling",
    tips: [
      {
        id: "1",
        message:
          "Request Validation, You can define the expected structure of the request data using Pydantic models.",
      },
      {
        id: "2",
        message:
          "Handling File Uploads, You can define a file upload endpoint using the File data type in FastAPI.",
      },
      {
        id: "3",
        message:
          "Handling CORS, You can enable CORS for your API by using the fastapi.middleware.cors middleware.",
      },
      {
        id: "4",
        message: "Learn Using Environmental variables from .env file",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Request Files",
        link: "https://fastapi.tiangolo.com/tutorial/request-files/#:~:text=Recap-,Request%20Files,%C2%B6,-You%20can%20define",
      },
      {
        id: "2",
        name: "CORS (Cross-Origin Resource Sharing)",
        link: "https://fastapi.tiangolo.com/tutorial/cors/#:~:text=More%20info-,CORS%20(Cross%2DOrigin%20Resource%20Sharing),-%C2%B6",
      },
      {
        id: "3",
        name: "Settings and Environment Variables",
        link: "https://fastapi.tiangolo.com/advanced/settings/#:~:text=%C2%B6-,You%20could%20have%20a,file%20with%3A,-ADMIN_EMAIL%3D%22deadpool",
      },
    ],
  },
  b35010104: {
    name: "Integrating with other APIs",
    tips: [
      {
        id: "1",
        message:
          "Learn about integrating FastAPI with other APIs. Use third-party libraries like Requests and HTTPX to make API requests. Understand how to handle API responses and errors",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Httpx Youtube Course",
        link: "https://www.youtube.com/watch?v=qAh5dDODJ5k",
      },
      {
        id: "2",
        name: "Python Requests Library",
        link: "https://oxylabs.io/blog/python-requests#:~:text=Tutorials-,Python%20Requests%20Library,-Adomas%20Sulcas",
      },
      {
        id: "3",
        name: "How HTTPX compares to the Requests module",
        link: "https://oxylabs.io/blog/httpx-vs-requests-vs-aiohttp#:~:text=Requests%20and%20AIOHTTP.-,How%20HTTPX%20compares%20to%20the%20Requests%20module,-Requests%20is%20a",
      },
    ],
  },
  f280100: {
    name: "(New) Responsive Web Design",
    tips: [
      {
        id: "1",
        message: "Complete this course and get certificate.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Go to Course",
        link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      },
    ],
  },
  f28010100: {
    name: "Video Course",
    tips: [
      {
        id: "1",
        message:
          "Complete this video course and get better understanding by wrting code as tutor from video writes and executes..",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Go to video Course 1",
        link: "https://www.youtube.com/watch?v=BsDoLVMnmZs",
      },
      {
        id: "2",
        name: "Go to video Course 2",
        link: "https://www.youtube.com/watch?v=HD13eq_Pmp8",
      },
    ],
  },
  f28010101: {
    name: "Introduction to HTML",
    tips: [
      {
        id: "1",
        message:
          "HTML (HyperText Markup Language) is a markup language used for creating web pages. It is the foundation of all web pages and is responsible for structuring the content of a web page. HTML uses markup tags to define the different elements of a web page, such as headings, paragraphs, lists, images, and links. These tags are enclosed in angle brackets (< >) and are placed within the content of a web page to structure and format it.",
      },
      {
        id: "2",
        message:
          "In essence, HTML provides the structure and foundation for web pages, while other technologies such as CSS (Cascading Style Sheets) and JavaScript are used to add styling and interactivity to web pages. Understanding HTML is crucial for anyone looking to create a website, and it is the starting point for learning web development.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "HTML Introduction",
        link: "https://www.w3schools.com/html/html_intro.asp",
      },
    ],
  },
  f28010102: {
    name: "Text Formatting and Links",
    tips: [
      {
        id: "1",
        message:
          "Use HTML tags to format text such as <b> for bold, <i> for italic, <u> for underline, <sup> for superscript, <sub> for subscript. Use headings (<h1> to <h6>) to organize content and provide structure to your page.",
      },
      {
        id: "2",
        message:
          "Use the <a> tag to create links to other pages or websites. The href attribute specifies the URL of the link. Use the target attribute to specify whether the link should open in the same window or a new window/tab.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "HTML Text Formatting",
        link: "https://www.w3schools.com/html/html_formatting.asp",
      },
      {
        id: "2",
        name: "HTML Links",
        link: "https://www.w3schools.com/html/html_links.asp",
      },
    ],
  },
  f28010103: {
    name: "Images and Multimedia",
    tips: [
      {
        id: "1",
        message:
          "Always include descriptive alternative text (alt text) for images so that people who are using screen readers or have images disabled can still understand what the image is about. Use image editing software to optimize your images for the web. This can include reducing the file size, compressing the image, and optimizing for web delivery.",
      },
      {
        id: "2",
        message:
          "Large media files can slow down your webpage's load time. Be sure to compress and optimize your media files so that they load quickly without sacrificing quality.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "html_media",
        link: "https://www.w3schools.com/html/html_media.asp",
      },
      {
        id: "2",
        name: "html-images",
        link: "https://www.geeksforgeeks.org/html-images/",
      },
      {
        id: "3",
        name: "how-to-add-multimedia-to-html?",
        link: "https://www.codewithrandom.com/2022/12/10/how-to-add-multimedia-to-html/",
      },
    ],
  },
  f28010104: {
    name: "Lists and Tables",
    tips: [
      {
        id: "1",
        message:
          "Each list item should be enclosed in <li> tags.Nest lists if necessary.",
      },
      {
        id: "2",
        message: "Create all types of lists and tables.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "html_tables",
        link: "https://www.w3schools.com/html/html_tables.asp",
      },
      {
        id: "2",
        name: "html_lists",
        link: "https://www.w3schools.com/html/html_lists.asp",
      },
    ],
  },
  f28010105: {
    name: "Forms",
    tips: [
      {
        id: "1",
        message:
          "Each list item should be enclosed in <li> tags.Nest lists if necessary.",
      },
      {
        id: "2",
        message: "Create all types of lists and tables.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "HTML Forms",
        link: "https://www.geeksforgeeks.org/html-forms/",
      },
      {
        id: "2",
        name: "html_forms",
        link: "https://www.w3schools.com/html/html_forms.asp",
      },
    ],
  },
  f28010200: {
    name: "Video Courses",
    tips: [
      {
        id: "1",
        message:
          "While watching video, write and execute code like tutor do in video by understanding it.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube video course 1",
        link: "https://www.youtube.com/watch?v=Edsxf_NBFrw",
      },
      {
        id: "2",
        name: "Youtube video course 2",
        link: "https://www.youtube.com/watch?v=iG2jotQo9NI",
      },
    ],
  },
  f28010201: {
    name: "Introduction to CSS",
    tips: [
      {
        id: "1",
        message:
          " To use CSS effectively, you'll need to understand how selectors, properties, and values work. A selector is used to select an HTML element, while properties and values are used to style that element. ",
      },
      {
        id: "2",
        message:
          "It's best to create a separate CSS file for your styles, rather than adding them inline or in the head of your HTML document. This makes it easier to maintain and update your styles across multiple pages.",
      },
      {
        id: "3",
        message:
          "Classes and IDs are used to target specific elements with CSS. Use classes for elements that share a style, and IDs for unique elements that need a specific style.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "css_intro",
        link: "https://www.w3schools.com/css/css_intro.asp",
      },
    ],
  },
  f28010202: {
    name: "CSS Box Model",
    tips: [
      {
        id: "1",
        message:
          "You can adjust the content, padding, border, and margin of an element to achieve different effects. Experiment with different values to see how they affect the element and the layout of the page.",
      },
      {
        id: "2",
        message:
          "The box model is a way of understanding how elements are structured in CSS. Each element is made up of content, padding, border, and margin. Understanding this structure is essential for creating layouts with CSS.",
      },
      {
        id: "3",
        message:
          "There are shorthand properties in CSS that allow you to set multiple box model properties at once. For example, the padding property can be set using padding: top right bottom left; or padding: top-and-bottom left-and-right;.",
      },
      {
        id: "4",
        message:
          " The box model can affect how elements are positioned on the page. For example, if an element has a margin, it will be pushed away from other elements, which can affect how the page is laid out. Make sure to take this into account when designing your page.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "css_boxmodel",
        link: "https://www.w3schools.com/css/css_boxmodel.asp",
      },
      {
        id: "2",
        name: "Introduction to the CSS basic box model",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",
      },
    ],
  },
  f28010203: {
    name: "CSS Selectors",
    tips: [
      {
        id: "1",
        message:
          " When writing CSS, it's important to use selectors efficiently to avoid unnecessary specificity and improve performance. Avoid using overly specific selectors that may cause conflicts or require more processing power to render.",
      },
      {
        id: "2",
        message:
          "Class and ID selectors are used to select elements based on their class or ID attributes. For example, if you want to select all elements with the class 'highlight', you would use the class selector, .highlight {}.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "css_selectors",
        link: "https://www.w3schools.com/css/css_selectors.asp",
      },
      {
        id: "2",
        name: "CSS selectors",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
      },
    ],
  },
  f28010204: {
    name: "CSS Layout",
    tips: [
      {
        id: "1",
        message:
          "A grid system can help you create a consistent layout for your website. This can make your design look more professional and easier to navigate.",
      },
      {
        id: "2",
        message:
          "Use relative units like em, rem, or percentages instead of fixed units like pixels for font sizes and widths. This will make your design more responsive and adapt better to different screen sizes.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "css_website_layout",
        link: "https://www.w3schools.com/css/css_website_layout.asp",
      },
      {
        id: "2",
        name: "CSS layout",
        link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout",
      },
    ],
  },
  f28010205: {
    name: "Responsive Web Design",
    tips: [
      {
        id: "1",
        message:
          "A grid system can help you create a consistent layout for your website. This can make your design look more professional and easier to navigate.",
      },
      {
        id: "2",
        message:
          "Use relative units like em, rem, or percentages instead of fixed units like pixels for font sizes and widths. This will make your design more responsive and adapt better to different screen sizes.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "html_responsive",
        link: "https://www.w3schools.com/html/html_responsive.asp",
      },
      {
        id: "2",
        name: "responsive-web-design",
        link: "https://kinsta.com/blog/responsive-web-design/",
      },
      {
        id: "3",
        name: "responsive-web-design",
        link: "https://kinsta.com/blog/responsive-web-design/",
      },
      {
        id: "4",
        name: "responsive-web-design",
        link: "https://kinsta.com/blog/responsive-web-design/",
      },
    ],
  },
  f28010206: {
    name: "CSS Layout",
    tips: [
      {
        id: "1",
        message:
          "A grid system can help you create a consistent layout for your website. This can make your design look more professional and easier to navigate.",
      },
      {
        id: "2",
        message:
          "Use relative units like em, rem, or percentages instead of fixed units like pixels for font sizes and widths. This will make your design more responsive and adapt better to different screen sizes.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "css_website_layout",
        link: "https://www.w3schools.com/css/css_website_layout.asp",
      },
      {
        id: "2",
        name: "CSS layout",
        link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout",
      },
    ],
  },
  py330201: {
    name: "Modules",
    tips: [
      {
        id: "1",
        message:
          "Understand the concept of modules, Learn how to create your own modules, Know the different types of modules. ",
      },
      {
        id: "2",
        message:
          "Understand the concept of packages, Learn how to install and manage packages, Understand the benefits of using modules and packages.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools (Modules)",
        link: "https://www.w3schools.com/python/python_modules.asp",
      },
    ],
  },
  py330202: {
    name: "File Handling",
    tips: [
      {
        id: "1",
        message:
          "File handling is useful for a variety of tasks, such as reading and writing data to a file, processing large amounts of data, working with text files, log files, and configuration files, and many more.",
      },
      {
        id: "2",
        message:
          "It's recommended to use a with statement when opening files as it automatically closes the file after you're done with it. This ensures that the file is properly closed even if an exception occurs. ",
      },
      {
        id: "2",
        message:
          "Important topics are Opening and Closing Files,Reading from Files, Writing to Files",
      },
    ],
    resources: [
      {
        id: "1",
        name: "w3schools (File handling)",
        link: "https://www.w3schools.com/python/python_file_handling.asp",
      },
    ],
  },
  py330203: {
    name: "Classes and OOPS",
    tips: [
      {
        id: "1",
        message:
          "Learn about Classes in Python and methods in it and to write methods in class.",
      },
      {
        id: "2",
        message:
          "Important topics are Method Overriding, Encapsulation, Overloading, Inheritance, Polymorphism, Data Abstraction, Class methods.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Classes",
        link: "https://www.w3schools.com/python/python_classes.asp",
      },
      {
        id: "2",
        name: "OOPS in Python",
        link: "https://www.geeksforgeeks.org/python-oops-concepts/",
      },
      {
        id: "3",
        name: "Classes and OOPS (Conceptual and Good one.)",
        link: "https://realpython.com/python3-object-oriented-programming/",
      },
    ],
  },
  py330204: {
    name: "Debugging",
    tips: [
      {
        id: "1",
        message: "What is debugging?",
      },
      {
        id: "1",
        message:
          "You can use add print statement as basic debugging purpose fter code line where you want to debug. In VS Code there is debugger extension can watch youtube tutorial from resource.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube Video",
        link: "https://www.youtube.com/watch?v=KEdq7gC_RTA",
      },
    ],
  },
  py330205: {
    name: "Decorators",
    tips: [
      {
        id: "1",
        message:
          "Decorators are a powerful feature that allows you to modify the behavior of functions, classes or methods without changing their source code",
      },
      {
        id: "1",
        message:
          "Understand the basics of decorators, Use the @syntax to apply decorators, Decorate functions with care, Use multiple decorators for complex behavior.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "GeeksForGeeks (Decorators)",
        link: "https://www.geeksforgeeks.org/decorators-in-python/",
      },
      {
        id: "2",
        name: "Youtube Video",
        link: "https://www.youtube.com/watch?v=r7Dtus7N4pI",
      },
      {
        id: "3",
        name: "Decorators",
        link: "https://www.datacamp.com/tutorial/decorators-python",
      },
    ],
  },
  py330206: {
    name: "Generators ",
    tips: [
      {
        id: "1",
        message:
          "Understanding what generators are, Use the yield keyword, Lazy evaluation, Iterating through a generator",
      },
      {
        id: "1",
        message: "Using generator expressions are important too.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "python-generators",
        link: "https://www.pythontutorial.net/advanced-python/python-generators/",
      },
      {
        id: "2",
        name: "python-generators-expression",
        link: "https://www.pythontutorial.net/advanced-python/python-generator-expressions/",
      },
    ],
  },
  py330207: {
    name: "Others",
    tips: [
      {
        id: "1",
        message: (
          <pre className="font-serif">
            List comprehension{" "}
            {aTag(
              "https://www.w3schools.com/python/python_lists_comprehension.asp"
            )}
            , Handling Exceptions{" "}
            {aTag(
              "https://www.programiz.com/python-programming/exception-handling"
            )}
            , DataType conversion{" "}
            {aTag(
              "https://www.programiz.com/python-programming/type-conversion-and-casting"
            )}
            , (Map,filter,lambda,sorted) functions,
          </pre>
        ),
      },
    ],
  },
  js28010301: {
    name: "Youtube  Course ",
    tips: [
      {
        id: "1",
        message:
          "This course is recommended because you will have better undertanding on each topic more than previous course and write and execute code same as video tutor.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube Hindi Course",
        link: "https://www.youtube.com/watch?v=chx9Rs41W6g",
      },
    ],
  },
  js28010302: {
    name: "DataTypes",
    tips: [
      {
        id: "1",
        message:
          "JavaScript has a feature called type coercion, which means that the type of a value can change automatically in certain situations. For example, when you use the + operator to concatenate a string and a number, the number will be converted to a string. Understanding when and how type coercion occurs will help you write more predictable code.",
      },
      {
        id: "1",
        message:
          "The typeof operator can be used to determine the data type of a value. It returns a string indicating the type of the operand. This is useful when you need to check the type of a variable or value.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "JavaScript data types",
        link: "https://www.programiz.com/javascript/data-types#:~:text=a%20string%20data.-,JavaScript%20Data%20Types,-There%20are%20eight",
      },
      {
        id: "2",
        name: "W3Schools (Data Types)",
        link: "https://www.w3schools.com/js/js_datatypes.asp",
      },
    ],
  },
  js28010303: {
    name: "Variables",
    tips: [
      {
        id: "1",
        message:
          "Declare your variables with the appropriate keyword: Use var, let, or const to declare your variables depending on the scope and the mutability requirements of the variable.",
      },
      {
        id: "2",
        message:
          "Use camelCase to separate words in variable names. For example, firstName instead of first_name.",
      },
      {
        id: "3",
        message:
          "Use const to declare variables that you do not intend to reassign. This ensures that the value remains constant throughout your program.",
      },
      {
        id: "4",
        message:
          "Choose descriptive and meaningful names for your variables to make your code more readable and easier to understand.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "JavaScript variables",
        link: "https://javascript.info/variables",
      },
      {
        id: "2",
        name: "W3Schools (variables)",
        link: "https://www.w3schools.com/js/js_variables.asp",
      },
    ],
  },
  js28010304: {
    name: " Strings ",
    tips: [
      {
        id: "1",
        message: `Creating Stings, Concatenation of Strings, Length of Strings, Accessing Character or letter in String, Search of Letter in String are important.`,
      },
      {
        id: "2",
        message: "Go through String methods and String search.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools (Strings)",
        link: "https://www.w3schools.com/js/js_strings.asp",
      },
      {
        id: "2",
        name: "W3Schools (String-methods)",
        link: "https://www.w3schools.com/js/js_string_methods.asp",
      },
      {
        id: "3",
        name: "W3Schools (String-serach)",
        link: "https://www.w3schools.com/js/js_string_search.asp",
      },
    ],
  },
  js28010305: {
    name: "Operators ",
    tips: [
      {
        id: "1",
        message: `Understanding arithmetic, comparison, and logical operators.`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "Operators",
        link: "https://www.w3schools.com/js/js_operators.asp",
      },
      {
        id: "2",
        name: "Arithmatic Operators",
        link: "https://www.w3schools.com/js/js_arithmetic.asp",
      },
    ],
  },
  js28010306: {
    name: " If/else Condtions ",
    tips: [
      {
        id: "1",
        message: `In JavaScript, control flow refers to the order in which statements are executed in a program. JavaScript programs typically use conditional statements and loops to control the flow of execution.`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "If/Else conditions",
        link: "https://www.w3schools.com/js/js_if_else.asp",
      },
      {
        id: "2",
        name: "Conditionals",
        link: "https://codeinstitute.net/global/blog/control-flow-in-javascript/#:~:text=variable%20fulfils%20it.-,Conditionals,-Conditional%20statements%20are",
      },
    ],
  },
  js28010307: {
    name: " Arrays ",
    tips: [
      {
        id: "1",
        message: `Learn creating array, accessing items in array, modifying array and array methods.`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "js_arrays",
        link: "https://www.w3schools.com/js/js_arrays.asp",
      },
      {
        id: "2",
        name: "js_array_methods",
        link: "https://www.w3schools.com/js/js_array_methods.asp",
      },
    ],
  },
  js28010308: {
    name: " Objects ",
    tips: [
      {
        id: "1",
        message: ` Dot notation is the preferred way to access properties in JavaScript objects. It's more concise and easier to read than using bracket notation.`,
      },
      {
        id: "2",
        message:
          "Object methods are functions that are attached to an object. They can be used to perform actions on the object or retrieve information about it.",
      },
      {
        id: "1",
        message:
          " Object destructuring is a convenient way to extract values from an object and assign them to variables. This can make your code more concise and easier to read.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "js_objects",
        link: "https://www.w3schools.com/js/js_objects.asp",
      },
      {
        id: "2",
        name: "js_object_methods",
        link: "https://www.w3schools.com/js/js_object_methods.asp",
      },
    ],
  },
  js28010309: {
    name: " Control Flow and Conditional Statements ",
    tips: [
      {
        id: "1",
        message:
          "Control flow in JavaScript is the order in which statements are executed in a script. It is essential to understand control flow in order to write effective and efficient code.",
      },
      {
        id: "2",
        message:
          "Nested loops can be computationally expensive and can slow down your code. Try to simplify your loops and consider using break or continue statements to exit loops early when appropriate.",
      },
      {
        id: "3",
        message:
          "If you have several conditions to check, consider using a switch statement instead of multiple if statements. A switch statement is more efficient and easier to read.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "What is Control Flow and why do we need it?",
        link: "https://medium.com/geekculture/control-flow-in-javascript-conditional-statements-acfdda94c97a#:~:text=What%20is%20Control%20Flow%20and%20why%20do%20we%20need%20it%3F",
      },
      {
        id: "2",
        name: "js_if_else",
        link: "https://www.w3schools.com/js/js_if_else.asp",
      },
      {
        id: "3",
        name: "js_switch",
        link: "https://www.w3schools.com/js/js_switch.asp",
      },
    ],
  },
  js28010310: {
    name: " For Loops ",
    tips: [
      {
        id: "1",
        message:
          "When declaring variables for loops, choose names that describe the purpose of the variable. For example, instead of using 'i' for a loop counter, use something like 'index' or 'counter' to make the code easier to read and understand.",
      },
      {
        id: "2",
        message:
          " If a loop is doing a lot of work, consider breaking it down into smaller loops or functions to make it more manageable",
      },
      {
        id: "1",
        message:
          "If you're looping over an array, consider using a for...of loop instead of a traditional for loop. This can make the code more readable and less error-prone.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "JavaScript For loop",
        link: "https://www.w3schools.com/js/js_loop_for.asp",
      },
      {
        id: "2",
        name: "JavaScript For in loop",
        link: "https://www.w3schools.com/js/js_loop_forin.asp",
      },
      {
        id: "2",
        name: "JavaScript For Of loop",
        link: "https://www.w3schools.com/js/js_loop_forof.asp",
      },
    ],
  },
  js28010311: {
    name: " While Loops ",
    tips: [
      {
        id: "1",
        message:
          "A while loop consists of a condition and a block of code. The code will execute repeatedly as long as the condition remains true.",
      },
      {
        id: "2",
        message:
          " Before you start the loop, you should initialize any necessary variables or arrays. This might include setting up a counter, declaring an empty array, or assigning a starting value to a variable.",
      },
      {
        id: "1",
        message:
          "To avoid an infinite loop, you should include an exit condition that will eventually cause the loop to terminate. This might involve checking a counter against a maximum value, checking an array length, or testing a variable against a specific value.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "js_loop_while",
        link: "https://www.w3schools.com/js/js_loop_while.asp",
      },
      {
        id: "2",
        name: "JavaScript while Loop",
        link: "https://www.programiz.com/javascript/while-loop#:~:text=loops.-,JavaScript%20while%20Loop,-The%20syntax%20of",
      },
    ],
  },
  js28010312: {
    name: " Functions ",
    tips: [
      {
        id: "1",
        message:
          " Use descriptive verbs that accurately describe what the function does. Use camelCase notation for multi-word function names.",
      },
      {
        id: "2",
        message:
          "Each function should have a clear and specific purpose. If a function becomes too long or complex, consider breaking it up into smaller, more focused functions.",
      },
      {
        id: "1",
        message:
          "Use parameters to allow your functions to be used with different input values. Use default values for parameters that aren't always necessary.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "js_functions",
        link: "https://www.w3schools.com/js/js_functions.asp",
      },
      {
        id: "2",
        name: "Types of funtions",
        link: "https://blog.sessionstack.com/how-javascript-works-the-different-ways-of-declaring-a-function-5-best-practices-8a0324c06fe2",
      },
    ],
  },
  js28010313: {
    name: " Exception Handling ",
    tips: [
      {
        id: "1",
        message:
          " The try-catch statement is used to handle exceptions that might occur in your code. Wrap the code that might throw an exception in a try block, and catch the exception in a catch block.",
      },
      {
        id: "2",
        message:
          " You can catch different types of exceptions by using specific catch clauses. This can help you to handle different errors in different ways.",
      },
      {
        id: "1",
        message:
          "You can throw custom errors using the throw statement. This can be useful for indicating specific error conditions or for creating your own error types.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "js_errors",
        link: "https://www.w3schools.com/js/js_errors.asp",
      },
      {
        id: "2",
        name: "Exception handling statements",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#:~:text=Copy%20to%20Clipboard-,Exception%20handling%20statements,-You%20can%20throw",
      },
    ],
  },
  r28010400: {
    name: "Video Course ",
    tips: [
      {
        id: "1",
        message:
          "If the video course has coding exercises or examples, try to follow along with the instructor and code along with them. This will help you understand the material better and also reinforce your coding skills.",
      },
      {
        id: "2",
        message:
          "Write down important points and concepts as you go along. This will help you retain information better and also serve as a reference for later.",
      },
      {
        id: "3",
        message:
          "Don't be afraid to pause the video or rewind to a certain point if you missed something. Take the time to fully understand each concept before moving on to the next one.",
      },
      {
        id: "3",
        message:
          " It's important to take breaks and rest your brain when watching a coding video course. Don't try to binge-watch everything in one sitting, as this can lead to burnout and fatigue. Instead, take regular breaks to recharge your energy and focus.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube Course 1",
        link: "https://www.youtube.com/watch?v=lLeZ8Cr2YVM",
      },
      {
        id: "2",
        name: "Youtube Course 2",
        link: "https://www.youtube.com/watch?v=XxXyfkrP298",
      },
    ],
  },
  r28010401: {
    name: "FreeCodeCamp Course",
    tips: [
      {
        id: "1",
        message:
          "Once you have the fundamentals down, you'll apply that knowledge by creating algorithms, so this course is recommended.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "FreeCodeCamp",
        link: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
      },
    ],
  },
  r28010402: {
    name: " Introduction to ReactJS",
    tips: [
      {
        id: "1",
        message:
          " ReactJS uses a virtual DOM, which is a lightweight representation of the actual DOM. This allows React to make efficient updates to the UI.",
      },
      {
        id: "1",
        message:
          "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It's an essential part of ReactJS and makes it easy to write components.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Create react app and show hello <your name> and learn folder structure",
        link: "https://create-react-app.dev/docs/getting-started/",
      },
    ],
  },
  r28010403: {
    name: "Components and Rendering",
    tips: [
      {
        id: "1",
        message:
          "Components should ideally do one thing and do it well. This makes them easier to understand and maintain.",
      },
      {
        id: "2",
        message:
          " If your component doesn't require any state or lifecycle methods, you can make it a functional component instead of a class component. Functional components are easier to read and write, and they perform better than class components.",
      },
      {
        id: "3",
        message:
          " Try to create smaller and more reusable components, each responsible for a specific part of your UI. This will make your code more modular and easier to maintain.",
      },
      {
        id: "4",
        message:
          "Try to keep your rendering logic as simple as possible. If your component needs to render different elements based on certain conditions, use conditional rendering instead of complex logic.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "functional-components",
        link: "https://www.robinwieruch.de/react-function-component/#react-function-component-example:~:text=Component%20as%20Function%22.-,TABLE%20OF%20CONTENTS,-React%20Function%20Component",
      },
      {
        id: "2",
        name: "reactjs-functional-components",
        link: "https://www.geeksforgeeks.org/reactjs-functional-components/",
      },
      {
        id: "3",
        name: "Understanding Rendering in React",
        link: "https://dev.to/teo_garcia/understanding-rendering-in-react-i5i",
      },
      {
        id: "4",
        name: "components conditional rendering",
        link: "https://www.robinwieruch.de/conditional-rendering-react/#:~:text=for%20these%20patterns.-,TABLE%20OF%20CONTENTS,-Conditional%20Rendering%20in",
      },
    ],
  },
  r28010404: {
    name: "State",
    tips: [
      {
        id: "1",
        message:
          " Each prop should serve a specific purpose and should not be too complex or overloaded with functionality.  Remember that props are read-only and should not be used to manage state within a component.",
      },
    ],
    resources: [
      {
        id: "4",
        name: "React State",
        link: "https://www.w3schools.com/react/react_state.asp",
      },
    ],
  },
  r28010405: {
    name: "Events ",
    tips: [
      {
        id: "1",
        message:
          "When defining event handlers, use arrow functions instead of regular functions. Arrow functions automatically bind this to the current component, which means you don't need to use bind() to maintain the correct this context.",
      },
    ],
    resources: [
      {
        id: "3",
        name: "react_events",
        link: "https://www.w3schools.com/react/react_events.asp",
      },
      {
        id: "1",
        name: "EVENT HANDLER IN REACT",
        link: "https://www.robinwieruch.de/react-event-handler/#:~:text=callback%20event%20handlers.-,EVENT%20HANDLER%20IN%20REACT,-First%2C%20we%20will",
      },
      {
        id: "2",
        name: "Introduction to events",
        link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#:~:text=different%20programming%20environments.-,What%20is%20an%20event%3F,-Events%20are%20things",
      },
    ],
  },
  r28010406: {
    name: "React Hooks ",
    tips: [
      {
        id: "1",
        message:
          "Before diving into more complex Hooks, make sure you understand the basic Hooks like useState, useEffect.",
      },
      {
        id: "2",
        message:
          " React Hooks are designed to work with functional components. So, if you're not already using them, consider refactoring your class components to functional components.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "How to useState in React?",
        link: "https://www.robinwieruch.de/react-usestate-hook/#:~:text=How%20to%20useState%20in%20React",
      },
      {
        id: "2",
        name: "How to useEffect in React?",
        link: "https://www.robinwieruch.de/react-useeffect-hook/#:~:text=How%20to%20useEffect%20in%20React",
      },
    ],
  },
  r28010407: {
    name: "React Router ",
    tips: [
      {
        id: "1",
        message:
          "The Link component is a way to create links between different parts of your application. It's similar to the <a> tag, but it uses React Router under the hood to handle navigation. When a user clicks on a Link, React Router will update the URL and render the appropriate component.",
      },
      {
        id: "2",
        message:
          "Nested routes allow you to define a hierarchy of routes, where child routes are nested inside parent routes. This can make your application more organized and easier to navigate. To define a nested route, simply define a Route component inside another Route component.",
      },
      {
        id: "3",
        message:
          "If a user tries to navigate to a route that doesn't exist, you can use Redirect to send them to a fallback route. This can help prevent errors and make your application more user-friendly.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "React Router 6 Tutorial",
        link: "https://www.robinwieruch.de/react-router/#:~:text=React%20Router%206%20Tutorial",
      },
    ],
  },
  r28010408: {
    name: "CSS Module",
    tips: [
      {
        id: "2",
        message:
          " CSS modules allow you to scope your CSS styles to individual components, preventing style clashes and making your code more modular. With CSS modules, you can import CSS styles directly into your React components and use them as regular JavaScript objects.",
      },
      {
        id: "3",
        message:
          "When making API calls, it's crucial to handle asynchronous actions correctly. You can use libraries like Axios or the built-in fetch API to make API requests and handle the response data.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "react-css-styling",
        link: "https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87",
      },
      {
        id: "2",
        name: "Project GitHub Repository",
        link: "https://github.com/css-modules/css-modules",
      },
    ],
  },
  r28010409: {
    name: "API Calls",
    tips: [
      {
        id: "1",
        message:
          "Once you have the fundamentals down, you'll apply that knowledge by creating algorithms, so this course is recommended first.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "How To Use Axios With React?",
        link: "https://www.freecodecamp.org/news/how-to-use-axios-with-react/",
      },
    ],
  },
  r28010410: {
    name: "API Calls",
    tips: [
      {
        id: "1",
        message:
          "Once you have the fundamentals down, you'll apply that knowledge by creating algorithms, so this course is recommended first.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "How To Use Axios With React?",
        link: "https://www.freecodecamp.org/news/how-to-use-axios-with-react/",
      },
    ],
  },
  r36010100: {
    name: "Props, State",
    tips: [
      {
        id: "1",
        message:
          "Each prop should serve a specific purpose and should not be too complex or overloaded with functionality.  Remember that props are read-only and should not be used to manage state within a component.",
      },
    ],
    resources: [
      {
        id: "4",
        name: "react_props",
        link: "https://www.w3schools.com/react/react_props.asp",
      },
      {
        id: "1",
        name: "A good tutorial explaining Props (Recommended)",
        link: "https://www.robinwieruch.de/react-pass-props-to-component/#:~:text=React%20props%20examples.-,TABLE%20OF%20CONTENTS,-React%20Component%20Props",
      },
      {
        id: "2",
        name: "what-is-the-difference-between-state-and-props-in-react?",
        link: "https://stackoverflow.com/a/50229738",
      },
      {
        id: "3",
        name: "How to update state from props in React?",
        link: "https://www.robinwieruch.de/react-derive-state-props/#:~:text=RSS-,How%20to%20update%20state%20from%20props%20in%20React,-MAY%2018%2C%202020",
      },
    ],
  },
  r36010101: {
    name: "React Hooks",
    tips: [
      {
        id: "3",
        message:
          "If you find yourself repeating the same logic across multiple components, consider extracting that logic into a custom Hook that can be reused throughout your application.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "React Hooks",
        link: "https://www.w3schools.com/react/react_hooks.asp#:~:text=React%20Sass%20Styling-,React%20Hooks,-What%20is%20a",
      },
      {
        id: "2",
        name: "Hooks Reference",
        link: "https://reactjs.org/docs/hooks-reference.html",
      },
      {
        id: "3",
        name: "How to update state from props in React?",
        link: "https://www.robinwieruch.de/react-derive-state-props/#:~:text=RSS-,How%20to%20update%20state%20from%20props%20in%20React,-MAY%2018%2C%202020",
      },
    ],
  },
  r36010102: {
    name: "Styling ReactJS ComponentsAPI Calls",
    tips: [
      {
        id: "1",
        message:
          "CSS frameworks like Bootstrap, Material UI, and Tailwind CSS can help you quickly create professional-looking UIs. They provide a set of pre-built components, styles, and layout utilities that you can use to build your app's interface.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "react-css-styling",
        link: "https://www.robinwieruch.de/react-css-styling/#:~:text=CSS%20style%20file.-,TABLE%20OF%20CONTENTS,-CSS%2Din%2DCSS",
      },
      {
        id: "2",
        name: "Tailwind CSS Crash Course",
        link: "https://www.youtube.com/watch?v=UBOj6rqRUME",
      },
      {
        id: "3",
        name: "Material UI React Tutorial",
        link: "https://www.youtube.com/watch?v=UBOj6rqRUME",
      },
    ],
  },
  r36010103: {
    name: "Class Components",
    tips: [
      {
        id: "1",
        message:
          " In a class component, you can define the initial state of the component using the constructor method. This is the recommended way to initialize state.",
      },
      {
        id: "2",
        message:
          "Class components have several lifecycle methods that you can use to manage updates to the component. For example, componentDidMount is called after the component is mounted, while componentDidUpdate is called after the component is updated.",
      },
      {
        id: "3",
        message:
          "The shouldComponentUpdate method is called before a component is re-rendered. You can use this method to optimize performance by preventing unnecessary re-renders of the component.",
      },
      {
        id: "4",
        message:
          "If a component needs to clean up any resources (such as event listeners or timers) when it is unmounted, you can define a componentWillUnmount method to perform this cleanup.",
      },
      {
        id: "3",
        message:
          "You can use the defaultProps property to set default values for the props that a component receives. This ensures that the component behaves correctly even if it is not passed all of the expected props.",
      },
      {
        id: "3",
        message:
          "Class components can receive data from their parent components via props. You can pass data down to child components by defining props in the parent component and accessing them in the child component.You can use the propTypes property to define the expected types of the props that a component receives. This helps to catch bugs and improve the reliability of your code.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "react_class component",
        link: "https://www.w3schools.com/react/react_class.asp",
      },
      {
        id: "2",
        name: "components-and-props",
        link: "https://reactjs.org/docs/components-and-props.html",
      },
    ],
  },
  r36010104: {
    name: "Forms",
    tips: [
      {
        id: "1",
        message:
          "Formik is a popular library for managing forms in React. It provides a simple API for managing form state, handling validation, and submitting data.",
      },
      {
        id: "2",
        message:
          " React-Hook-Form is a library that uses React hooks to manage form state. It provides a simple API for managing form data, handling validation, and submitting data.",
      },
    ],
    resources: [
      {
        id: "3",
        name: "react_forms",
        link: "https://www.w3schools.com/react/react_forms.asp",
      },
      {
        id: "1",
        name: "how-to-create-forms-in-react-using-react-hook-form?",
        link: "https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/",
      },
      {
        id: "2",
        name: "building-forms-formik-react",
        link: "https://blog.logrocket.com/building-forms-formik-react/",
      },
    ],
  },
  r36010105: {
    name: "State Management",
    tips: [
      {
        id: "1",
        message:
          "Zustand makes it easy to share state between components without the need for a global state management library like Redux.",
      },
      {
        id: "1",
        message:
          "Redux can be used to manage the state of your application that needs to be shared between multiple components or needs to persist even when the component unmounts. Instead of passing down the state from parent to child components, Redux provides a centralized store where all the state is kept. Components can subscribe to the store to get the current state and can dispatch actions to update the state. This approach provides a clear separation of concerns and makes it easier to reason about your application's state management.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "useContext vs useState vs useReducer",
        link: "https://www.robinwieruch.de/react-state-usereducer-usestate-usecontext/#:~:text=step%20by%20step.-,TABLE%20OF%20CONTENTS,-React%20useState%3A%20simple",
      },
      {
        id: "2",
        name: "Redux Tutorial - Beginner to Advanced",
        link: "https://www.youtube.com/watch?v=zrs7u6bdbUw",
      },
      {
        id: "3",
        name: "zustand (recommended)",
        link: "https://github.com/pmndrs/zustand",
      },
    ],
  },
  js150101: {
    name: "FreeCodeCamp  Setup ",
    tips: [
      {
        id: "1",
        message:
          "Make sure to make your profile, certificates to public from private .",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Guide",
        link: `${process.env.REACT_APP_REDIRECT_URI}/freecodecamp/guide`,
      },
    ],
  },
  js150102: {
    name: "FreeCodeCamp  Course ",
    tips: [
      {
        id: "1",
        message:
          "Once you have the fundamentals down, you'll apply that knowledge by creating algorithms, so this course is recommended first.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "FreeCodeCamp",
        link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
      },
    ],
  },
  js150103: {
    name: "Youtube  Course ",
    tips: [
      {
        id: "1",
        message:
          "This course is recommended next because you will have better undertanding on each topic more than previous course and this is like polish to your previous one.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Youtube Hindi Course",
        link: "https://www.youtube.com/watch?v=chx9Rs41W6g",
      },
    ],
  },
  js150104: {
    name: "DataTypes",
    tips: [
      {
        id: "1",
        message:
          "JavaScript has a feature called type coercion, which means that the type of a value can change automatically in certain situations. For example, when you use the + operator to concatenate a string and a number, the number will be converted to a string. Understanding when and how type coercion occurs will help you write more predictable code.",
      },
      {
        id: "1",
        message:
          "The typeof operator can be used to determine the data type of a value. It returns a string indicating the type of the operand. This is useful when you need to check the type of a variable or value.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "JavaScript data types",
        link: "https://www.programiz.com/javascript/data-types#:~:text=a%20string%20data.-,JavaScript%20Data%20Types,-There%20are%20eight",
      },
      {
        id: "2",
        name: "W3Schools (Data Types)",
        link: "https://www.w3schools.com/js/js_datatypes.asp",
      },
    ],
  },
  js150105: {
    name: "Variables",
    tips: [
      {
        id: "1",
        message:
          "Declare your variables with the appropriate keyword: Use var, let, or const to declare your variables depending on the scope and the mutability requirements of the variable.",
      },
      {
        id: "2",
        message:
          "Use camelCase to separate words in variable names. For example, firstName instead of first_name.",
      },
      {
        id: "3",
        message:
          "Use const to declare variables that you do not intend to reassign. This ensures that the value remains constant throughout your program.",
      },
      {
        id: "4",
        message:
          "Choose descriptive and meaningful names for your variables to make your code more readable and easier to understand.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "JavaScript variables",
        link: "https://javascript.info/variables",
      },
      {
        id: "2",
        name: "W3Schools (variables)",
        link: "https://www.w3schools.com/js/js_variables.asp",
      },
    ],
  },
  js150106: {
    name: " Strings ",
    tips: [
      {
        id: "1",
        message: `Creating Stings, Concatenation of Strings, Length of Strings, Accessing Character or letter in String, Search of Letter in String are important.`,
      },
      {
        id: "2",
        message: "Go through String methods and String search.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "W3Schools (Strings)",
        link: "https://www.w3schools.com/js/js_strings.asp",
      },
      {
        id: "2",
        name: "W3Schools (String-methods)",
        link: "https://www.w3schools.com/js/js_string_methods.asp",
      },
      {
        id: "3",
        name: "W3Schools (String-serach)",
        link: "https://www.w3schools.com/js/js_string_search.asp",
      },
    ],
  },
  js150107: {
    name: "Operators ",
    tips: [
      {
        id: "1",
        message: `Understanding arithmetic, comparison, and logical operators.`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "Operators",
        link: "https://www.w3schools.com/js/js_operators.asp",
      },
      {
        id: "2",
        name: "Arithmatic Operators",
        link: "https://www.w3schools.com/js/js_arithmetic.asp",
      },
    ],
  },
  js150108: {
    name: " If/else Condtions ",
    tips: [
      {
        id: "1",
        message: `In JavaScript, control flow refers to the order in which statements are executed in a program. JavaScript programs typically use conditional statements and loops to control the flow of execution.`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "If/Else conditions",
        link: "https://www.w3schools.com/js/js_if_else.asp",
      },
      {
        id: "2",
        name: "Conditionals",
        link: "https://codeinstitute.net/global/blog/control-flow-in-javascript/#:~:text=variable%20fulfils%20it.-,Conditionals,-Conditional%20statements%20are",
      },
    ],
  },
  js150109: {
    name: " Arrays ",
    tips: [
      {
        id: "1",
        message: `Learn creating array, accessing items in array, modifying array.`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "js_arrays",
        link: "https://www.w3schools.com/js/js_arrays.asp",
      },
    ],
  },
  js150110: {
    name: " Objects ",
    tips: [
      {
        id: "1",
        message: ` Dot notation is the preferred way to access properties in JavaScript objects. It's more concise and easier to read than using bracket notation.`,
      },
      {
        id: "2",
        message:
          " Object destructuring is a convenient way to extract values from an object and assign them to variables. This can make your code more concise and easier to read.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "js_objects",
        link: "https://www.w3schools.com/js/js_objects.asp",
      },
    ],
  },
  js250101: {
    name: " Control Flow and Conditional Statements ",
    tips: [
      {
        id: "1",
        message:
          "Control flow in JavaScript is the order in which statements are executed in a script. It is essential to understand control flow in order to write effective and efficient code.",
      },
      {
        id: "2",
        message:
          "Nested loops can be computationally expensive and can slow down your code. Try to simplify your loops and consider using break or continue statements to exit loops early when appropriate.",
      },
      {
        id: "3",
        message:
          "If you have several conditions to check, consider using a switch statement instead of multiple if statements. A switch statement is more efficient and easier to read.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "What is Control Flow and why do we need it?",
        link: "https://medium.com/geekculture/control-flow-in-javascript-conditional-statements-acfdda94c97a#:~:text=What%20is%20Control%20Flow%20and%20why%20do%20we%20need%20it%3F",
      },
      {
        id: "2",
        name: "js_if_else",
        link: "https://www.w3schools.com/js/js_if_else.asp",
      },
      {
        id: "3",
        name: "js_switch",
        link: "https://www.w3schools.com/js/js_switch.asp",
      },
    ],
  },
  js250102: {
    name: " For Loops ",
    tips: [
      {
        id: "1",
        message:
          "When declaring variables for loops, choose names that describe the purpose of the variable. For example, instead of using 'i' for a loop counter, use something like 'index' or 'counter' to make the code easier to read and understand.",
      },
      {
        id: "2",
        message:
          " If a loop is doing a lot of work, consider breaking it down into smaller loops or functions to make it more manageable",
      },
      {
        id: "1",
        message:
          "If you're looping over an array, consider using a for...of loop instead of a traditional for loop. This can make the code more readable and less error-prone.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "JavaScript For loop",
        link: "https://www.w3schools.com/js/js_loop_for.asp",
      },
      {
        id: "2",
        name: "JavaScript For in loop",
        link: "https://www.w3schools.com/js/js_loop_forin.asp",
      },
      {
        id: "2",
        name: "JavaScript For Of loop",
        link: "https://www.w3schools.com/js/js_loop_forof.asp",
      },
    ],
  },
  js250103: {
    name: " While Loops ",
    tips: [
      {
        id: "1",
        message:
          "A while loop consists of a condition and a block of code. The code will execute repeatedly as long as the condition remains true.",
      },
      {
        id: "2",
        message:
          " Before you start the loop, you should initialize any necessary variables or arrays. This might include setting up a counter, declaring an empty array, or assigning a starting value to a variable.",
      },
      {
        id: "1",
        message:
          "To avoid an infinite loop, you should include an exit condition that will eventually cause the loop to terminate. This might involve checking a counter against a maximum value, checking an array length, or testing a variable against a specific value.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "js_loop_while",
        link: "https://www.w3schools.com/js/js_loop_while.asp",
      },
      {
        id: "2",
        name: "JavaScript while Loop",
        link: "https://www.programiz.com/javascript/while-loop#:~:text=loops.-,JavaScript%20while%20Loop,-The%20syntax%20of",
      },
    ],
  },
  js250104: {
    name: " Functions ",
    tips: [
      {
        id: "1",
        message:
          " Use descriptive verbs that accurately describe what the function does. Use camelCase notation for multi-word function names.",
      },
      {
        id: "2",
        message:
          "Each function should have a clear and specific purpose. If a function becomes too long or complex, consider breaking it up into smaller, more focused functions.",
      },
      {
        id: "1",
        message:
          "Use parameters to allow your functions to be used with different input values. Use default values for parameters that aren't always necessary.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "js_functions",
        link: "https://www.w3schools.com/js/js_functions.asp",
      },
      {
        id: "2",
        name: "Types of funtions",
        link: "https://blog.sessionstack.com/how-javascript-works-the-different-ways-of-declaring-a-function-5-best-practices-8a0324c06fe2",
      },
    ],
  },
  js250105: {
    name: " Exception Handling ",
    tips: [
      {
        id: "1",
        message:
          " The try-catch statement is used to handle exceptions that might occur in your code. Wrap the code that might throw an exception in a try block, and catch the exception in a catch block.",
      },
      {
        id: "2",
        message:
          " You can catch different types of exceptions by using specific catch clauses. This can help you to handle different errors in different ways.",
      },
      {
        id: "1",
        message:
          "You can throw custom errors using the throw statement. This can be useful for indicating specific error conditions or for creating your own error types.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "js_errors",
        link: "https://www.w3schools.com/js/js_errors.asp",
      },
      {
        id: "2",
        name: "Exception handling statements",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#:~:text=Copy%20to%20Clipboard-,Exception%20handling%20statements,-You%20can%20throw",
      },
    ],
  },
  js250106: {
    name: " Array Methods ",
    tips: [
      {
        id: "1",
        message:
          " push, pop, map, filter, foreach methods are important and it would be better to learn all methods just take your time and practice more.",
      },
    ],
    resources: [
      {
        id: "2",
        name: "js_array_methods",
        link: "https://www.w3schools.com/js/js_array_methods.asp",
      },
    ],
  },
  js250107: {
    name: " Object Methods  ",
    tips: [
      {
        id: "1",
        message:
          " Make sure to learn and practice all object methods , basic ones are Object.keys() and Object.values().",
      },
      {
        id: "2",
        message:
          "Object methods are functions that are attached to an object. They can be used to perform actions on the object or retrieve information about it.",
      },
    ],
    resources: [
      {
        id: "2",
        name: "js_object_methods",
        link: "https://www.w3schools.com/js/js_object_methods.asp",
      },
    ],
  },
  js330101: {
    name: " Classes and OOPS  ",
    tips: [
      {
        id: "1",
        message:
          "Before diving into JavaScript classes, it's important to understand the basics of OOP concepts like encapsulation, inheritance, and polymorphism. You can find numerous resources online that explain these concepts.",
      },
      {
        id: "2",
        message:
          "JavaScript's ES6 class syntax is a simpler and cleaner way to create classes. It uses a more traditional class syntax that's similar to other OOP languages.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Classes",
        link: "https://javascript.info/classes",
      },
      {
        id: "2",
        name: "Object Oriented Programming in JavaScript ",
        link: "https://www.freecodecamp.org/news/how-javascript-implements-oop/",
      },
      {
        id: "3",
        name: "What is OOP (Object-oriented Programming)?",
        link: "https://www.scaler.com/topics/javascript/oops-in-javascript/",
      },
    ],
  },
  js330102: {
    name: " Prototypes and Inheritance  ",
    tips: [
      {
        id: "1",
        message:
          "A prototype is an object that serves as a blueprint for other objects. It contains properties and methods that can be inherited by other objects, allowing them to share functionality and behavior.",
      },
      {
        id: "2",
        message:
          "Keep your prototypes focused on a specific functionality. This will make it easier to test and maintain your code.",
      },
      {
        id: "3",
        message:
          "The Object.setPrototypeOf() method can be used to set the prototype of an object. To implement inheritance, you can set the prototype of the derived class to be the prototype of the base class using the Object.setPrototypeOf() method.",
      },
    ],
    resources: [
      {
        id: "2",
        name: "js_object_prototypes",
        link: "https://www.w3schools.com/js/js_object_prototypes.asp",
      },
      {
        id: "2",
        name: "prototypes",
        link: "https://www.programiz.com/javascript/prototype",
      },
      {
        id: "2",
        name: "js_class_inheritance",
        link: "https://www.w3schools.com/js/js_class_inheritance.asp",
      },
    ],
  },
  js330103: {
    name: " DOM manipulation  ",
    tips: [
      {
        id: "1",
        message:
          "It's important to be mindful of performance. For example, if you need to change multiple properties of an element, it's more efficient to create a temporary document.createDocumentFragment and make all your changes to that fragment before appending it to the actual DOM.",
      },
      {
        id: "2",
        message:
          "Be careful when using innerHTML to modify the contents of an element, as it can be a security risk if you're allowing user input.",
      },
    ],
    resources: [
      {
        id: "2",
        name: "JavaScript DOM Manipulation Course",
        link: "https://www.freecodecamp.org/news/javascript-dom-manipulation/#:~:text=JavaScript%20DOM%20Manipulation%20Course",
      },
      {
        id: "2",
        name: "js_htmldom",
        link: "https://www.w3schools.com/js/js_htmldom.asp",
      },
    ],
  },
  js330104: {
    name: " Asynchronous JavaScript  ",
    tips: [
      {
        id: "1",
        message:
          "Promises provide a simple way to handle asynchronous operations. They allow you to handle success and error cases in a concise and readable manner. Promises can be created using the Promise constructor, which takes a function that defines the asynchronous operation. You can then use .then() and .catch() methods to handle success and error cases, respectively.",
      },
      {
        id: "2",
        message:
          " Async/await is a syntactic sugar built on top of Promises that provides a more readable way to write asynchronous code. Async/await allows you to write asynchronous code that looks like synchronous code. You can use the async keyword to define a function that returns a Promise, and the await keyword to wait for a Promise to resolve.",
      },
    ],
    resources: [
      {
        id: "1",
        name: "Asynchronous Programming in JavaScript",
        link: "https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/",
      },
      {
        id: "2",
        name: "js_asynchronous",
        link: "https://www.w3schools.com/JS/js_asynchronous.asp",
      },
      {
        id: "3",
        name: "Synchronous vs Asynchronous Programming in JavaScript in Hindi",
        link: "https://www.youtube.com/watch?v=tBmeblr67U0",
      },
    ],
  },
  js330105: {
    name: " Other Concepts  ",
    tips: [
      {
        id: "1",
        message: `setTimeout and setInterval both take two arguments: a function to execute and a time delay in milliseconds. setTimeout executes the function once after the delay time has elapsed, while setInterval executes the function repeatedly at the specified time interval.`,
      },
      {
        id: "2",
        message: `If your callback function can potentially fail, consider adding error handling to it. This will help you catch and handle any errors that may occur and prevent your code from crashing.`,
      },
      {
        id: "3",
        message: ` Use arrow functions instead of traditional function declarations when defining your callback functions. This will make your code more concise and easier to read.`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "setTimeout and setInternval",
        link: "https://www.geeksforgeeks.org/java-script-settimeout-setinterval-method/",
      },
      {
        id: "2",
        name: "Callbacks ",
        link: "https://www.geeksforgeeks.org/what-to-understand-callback-and-callback-hell-in-javascript/",
      },
      {
        id: "3",
        name: "What is OOP (Object-oriented Programming)?",
        link: "https://www.scaler.com/topics/javascript/oops-in-javascript/",
      },
    ],
  },
  js330106: {
    name: " Closures ",
    tips: [
      {
        id: "1",
        message: ` Closures are useful for creating private variables and functions, as well as for creating functions that can be passed as arguments to other functions.        `,
      },
      {
        id: "2",
        message: `In ES6, let and const keywords were introduced as block-scoped alternatives to var. They allow you to declare variables with block-level scope, which can help prevent issues with variable hoisting and unintended variable mutations.`,
      },
      {
        id: "3",
        message: `Arrow functions have a lexical this binding, which means that the value of this inside the function is determined by the surrounding lexical scope. This can help avoid issues with this binding in nested functions.`,
      },
    ],
    resources: [
      {
        id: "1",
        name: "Closures",
        link: "https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/#:~:text=Let%E2%80%99s%20get%20started!-,What%20is%20a%20closure%3F,-Closures%20are%20an",
      },
      {
        id: "2",
        name: "Lexical Environment ",
        link: "https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/#:~:text=excellent%20article.-,Lexical%20Environment,-By%20definition%3A",
      },
      {
        id: "3",
        name: "Closure in JavaScript",
        link: "https://www.geeksforgeeks.org/closure-in-javascript/",
      },
    ],
  },
};
