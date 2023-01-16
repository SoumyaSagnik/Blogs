import Code from "../components/Code";
import { motion } from "framer-motion";

const Git = () => {
  const leftCurly = "{";
  const rightCurly = "}";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="content page">
        <h1>Git</h1>
        <p>
          Git is a version control system that allows developers to track
          changes in their code over time, collaborate on software projects, and
          revert to previous versions if necessary. It was created by Linus
          Torvalds in 2005.
        </p>
        <h3>Setup</h3>
        <Code />
        <pre>
          <div className="code-body">
            <p>git config --global user.name "github username"</p>
            <p>git config --global user.email "github email"</p>
            <p className="space-top red">#Verify Setup</p>
            <p>git config --list</p>
          </div>
        </pre>
        <h3>Initial Commands</h3>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Initialization</p>
            <p>git init</p>
            <p className="em white">
              [Creates a folder .git which contains the meta-data of your git
              repository]
            </p>
            <p className="space-top red">#Status</p>
            <p>git status</p>
            <p className="em white">
              [Tells us which branch we're in, no of commits, changes, etc]
            </p>
            <p className="space-top red">#Clone</p>
            <p>git clone repository_url folder_name</p>
            <p className="em white">
              [Brings a git repository to your computer]
            </p>
            <p className="space-top red">#Changes</p>
            <p>git diff filename</p>
            <p className="em white">
              [Shows changes made to a particular file]
            </p>
            <p className="space-top">git diff</p>
            <p className="em white">[Shows all the changes wrt head]</p>
            <p className="space-top red">
              #View changes made for a specific hash/commit id
            </p>
            <p>git show hash-id</p>
          </div>
        </pre>
        <h3>Head</h3>
        <p>
          In Git <span className="green">Head</span> refers to the current
          commit on the branch that you are currently working on. It is a
          pointer to the <span className="green">last commit</span> in the
          branch's history, and it moves <span className="green">forward</span>{" "}
          as <span className="green">new</span> commits are{" "}
          <span className="green">added</span> to the branch.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Commit Head is pointing to</p>
            <p>git log -1</p>
            <p className="space-top red">
              #Changes of the commit that head is pointing to
            </p>
            <p>git show HEAD</p>
            <p className="space-top red">#Restore file to previous version</p>
            <p>git restore filename</p>
            <p className="em white">
              [File gets restored to the version pointed by the head]
            </p>
          </div>
        </pre>
        <h3>Lifecycle of a change</h3>
        <p>There are 3 main stages for any change in git.</p>
        <ul>
          <li>
            <p>
              <span className="blanchedalmond">Modified:</span> It means you've{" "}
              <span className="green">made changes</span> to a file but have{" "}
              <span className="green">not committed</span> it yet.
            </p>
          </li>
          <li>
            <p>
              <span className="blanchedalmond">Staged:</span> It means that you
              have <span className="green">marked</span> a modified file in its
              current version to go into your{" "}
              <span className="green">next</span> commit.
            </p>
          </li>
          <li>
            <p>
              <span className="blanchedalmond">Committed:</span> It means that
              the data has been <span className="green">stored</span> in your{" "}
              <span className="green">local</span> database.
            </p>
          </li>
        </ul>
        <p>
          If you want your changes to reflect in the repository hosted on
          github, you've to <span className="green">push</span> those changes.
        </p>
        <p className="space-bottom"></p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#To Stage Changes</p>
            <p>git add index.html</p>
            <p className="em white">
              [Adds the file index.html to track if it's a new file.
            </p>
            <p className="em white">Old files get staged]</p>
            <p className="space-top">git add .</p>
            <p className="em white">[Adds all the files to staged state]</p>
            <p className="space-top red">#To Commit Changes</p>
            <p>git commit -m "commit message"</p>
            <p className="em white">
              [Moves the change from staged to committed state]
            </p>
            <p className="space-top red">#Add and Commit shortcut</p>
            <p>git commit -am "commit message"</p>
          </div>
        </pre>
        <h3>View History</h3>
        <p>
          <span className="green">git log</span> is the command that displays
          the histroy of a repository. It shows the{" "}
          <span className="green">author</span>,
          <span className="green"> date</span>, and{" "}
          <span className="green">commit message</span> for each commit, along
          with other information such as the commit hash. The command can be
          used with various options and flags to customize the output.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#View everything</p>
            <p>git log</p>
            <p className="space-top red">#View latest n commits</p>
            <p>git log -n 5</p>
            <p className="yellow">or</p>
            <p>git log --max-count 5</p>
            <p className="em white">[Shows the 5 latest commits]</p>
            <p className="space-top red">
              #View commits made after specific date
            </p>
            <p>git log --since="2 weeks ago"</p>
            <p className="em white">[Shows commits made in the past 2 weeks]</p>
            <p className="space-top red">
              #View commits made before specific date
            </p>
            <p className="em white">[Shows commits before January 1, 2023]</p>
            <p>git log --until="2023-01-01"</p>
            <p className="space-top red">#View changes made in each commit</p>
            <p>git log --p</p>
            <p className="em white">
              [Shows the changes made in each commit, similar to diff]
            </p>
            <p className="space-top red">
              #View stats for modified files in each commit
            </p>
            <p>git log --stat</p>
            <p className="space-top red">
              #View commit that added or removed a specified string
            </p>
            <p>git log -S "function"</p>
            <p className="em white">
              [Shows commits that added or removed lines containing the string
              "function"]
            </p>
            <p className="space-top red">
              #View commits that changed a file matching a specific regex
            </p>
            <p>git log -G "*.js"</p>
            <p className="em white">
              [Shows commits that modified files with .js extension]
            </p>
            <p className="space-top red">
              #View commits made by a specific person
            </p>
            <p>git log --author="John Doe"</p>
            <p className="em white">[Shows commits made by John Doe]</p>
            <p className="space-top red">
              #View commits having a specific string in commit message
            </p>
            <p>git log --grep "fix"</p>
            <p className="em white">
              [Shows commits having "fix" in commit message]
            </p>
            <p className="space-top red">#View commits from all branches</p>
            <p>git log --all</p>
            <p className="space-top red">#View history in a specific format</p>
            <p>git log --pretty=format:"%h %s %an"</p>
            <p className="em white">
              [Shows each commit with hash, subject, and author name]
            </p>
            <p className="space-top red">#View one liner for each commit</p>
            <p>git log --oneline</p>
            <p className="em white">
              [Shows commit hash, author, date, and commit message on a single
              line for each commit]
            </p>
            <p className="space-top red">
              #View graph of a branch and merge history
            </p>
            <p>git log --graph</p>
            <p className="space-top red">
              #View commits in reverse chronological order
            </p>
            <p>git log --reverse</p>
          </div>
        </pre>
        <p className="space-all">
          The commands mentioned above can be combined to filter the output even
          further.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>
              git log --author="John Doe" --since="2023-01-01" -n 5
              --pretty=oneline
            </p>
            <p className="em white">
              [Shows latest 5 commits of John Doe after Jan 1, 2023 with
            </p>
            <p className="em white">
              commit hash, author, date and commit message on a single line]
            </p>
          </div>
        </pre>
        <h3>Branching, Tagging and Merging</h3>
        <p>
          <span className="green">Branching</span> refers to the ability to
          create a new <span className="green">line of development</span>{" "}
          separate from the main line of development. This allows{" "}
          <span className="green">multiple</span> people to work on{" "}
          <span className="green">different</span> features or bug fixes{" "}
          <span className="green">simultaneously</span> without{" "}
          <span className="green">interfering</span> with each other's work.
          Each branch has its own set of commits and its own{" "}
          <span className="green">HEAD</span> pointer. When you start a new
          branch it starts off with the{" "}
          <span className="green">same commits</span> as the branch it was
          created from. The <span className="green">default</span> branch in git
          is called the <span className="green">master</span> branch.
        </p>
        <p className="space-top"></p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#List all branches</p>
            <p>git branch</p>
            <p className="em white">
              [Lists all branches and also tells which branch you're currently
              on]
            </p>
            <p className="space-top red">#Create new branch</p>
            <p>git branch branch-name</p>
            <p className="space-top red">#Change branch</p>
            <p>git checkout branch-name</p>
            <p className="space-top red">#Create and move to new branch</p>
            <p>git checkout -b branch-name</p>
            <p className="space-top red">#Delete a brach</p>
            <p>git branch -d branch-name</p>
          </div>
        </pre>
        <p className="space-bottom">
          <span className="green">Tagging</span> is a way to{" "}
          <span className="green">mark</span> a specific point in the commit
          history with a <span className="green">label</span>. This can be used
          to mark a specific <span className="green">version</span> of the code.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Tag a commit</p>
            <p>git tag -a tag-name hash-id -m "commit message"</p>
            <p className="space-top red">#Delete a tag</p>
            <p>git tag -d tag-name</p>
          </div>
        </pre>
        <p>
          <span className="green">Merging</span> is the process of bringing{" "}
          <span className="green">changes</span> from one branch into another.
          For example, if you've been working on a new feature in a separate
          branch and you want to bring those changes back into the main branch,
          you would <span className="green">merge</span> the feature branch into
          the main branch. There are two types of merge:
        </p>
        <ul>
          <li>
            <span className="blanchedalmond">Fast-Forward merge:</span> When you
            merge a branch into another branch, if the{" "}
            <span className="green">latter one hasn't moved forward</span>, git
            will simply move the <span className="green">head</span> pointer of
            the <span className="green">latter</span> branch to the head of the{" "}
            <span className="green">merged branch</span>.
          </li>
          <li>
            <span className="blanchedalmond">Three way merge:</span> When there
            are commits on <span className="green">both</span> branches that
            nedd to be combined, git will perform a three-way merge. This
            creates a new <span className="green">merge commit</span> that
            brings the changes from both branches{" "}
            <span className="green">together</span>.
          </li>
        </ul>
        <p className="space-top">
          When merging, git will automatically try to merge the changes
          together, but sometimes <span className="green">conflicts</span> can
          occur if the <span className="green">same lines</span> of code were{" "}
          <span className="green">modified</span> in{" "}
          <span className="green">both</span> branches. When this happens,
          you'll need to <span className="green">resolve</span> the conflicts{" "}
          <span className="green">manually</span> before you can complete the
          merge.
        </p>
        <p className="space-top"></p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Merge a branch</p>
            <p>git merge branch-name</p>
          </div>
        </pre>
        <h3>Stash</h3>
        <p>
          It allows you to <span className="green">temporarily</span> save
          changes that you made to your working directory but have not yet{" "}
          <span className="green">committed</span>. This can be useful when you
          need to <span className="green">switch</span> to a{" "}
          <span className="green">different</span> branch to work on something
          else, but you <span className="green">don't</span> want to{" "}
          <span className="green">commit</span> your changes yet or{" "}
          <span className="green">lose</span> them.
        </p>
        <p className="space-all">
          When you use the <span className="green">stash</span> command, it'll
          save the <span className="green">current</span> state of your working
          directory, including any <span className="green">modified</span> files
          and any <span className="green">new</span> files that have not yet
          been <span className="green">added</span> to the repository, into a
          new <span className="green">stash</span> and then{" "}
          <span className="green">discards</span> the changes in your working
          directory, leaving it in a <span className="green">clean</span> state.
        </p>
        <p className="space-bottom">
          Git stash is useful when you are in the middle of some changes and
          you've to switch to <span className="green">another</span> branch for
          a <span className="green">moment</span>, instead of committing the
          changes and create a new branch, you can simply use{" "}
          <span className="green">git stash</span> to save the changes and then
          switch to the other branch. Once you're done with the other branch,
          you can <span className="green">apply</span> the{" "}
          <span className="green">stash</span> to your working directory and
          continue with your changes.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Stash changes</p>
            <p>git stash</p>
            <p className="space-top red">#Display list of all stashes</p>
            <p>git stash list</p>
            <p className="space-top red">
              #Apply latest stash to working directory
            </p>
            <p>git stash apply</p>
            <p className="space-top red">
              #Apply nth stash to working directory
            </p>
            <p>
              git stash apply stash@{leftCurly}n{rightCurly}
            </p>
            <p className="space-top red">#Remove latest stash</p>
            <p>git stash drop</p>
            <p className="space-top red">#Remove nth stash</p>
            <p>
              git stash drop stash@{leftCurly}n{rightCurly}
            </p>
            <p className="space-top red">
              #Apply latest stash and then remove it
            </p>
            <p>git stash pop</p>
            <p className="space-top red">#Remove all the stashes</p>
            <p>git stash clear</p>
          </div>
        </pre>
        <p>
          Keep in mind that when you use git stash, it'll only stash the changes
          that are <span className="green">not yet committed</span>.
        </p>
        <h3>Git Remote</h3>
        <p>
          A <span className="green">remote</span> in git is a repository that is
          <span className="green"> not located</span> on the{" "}
          <span className="green">same</span> machine as your{" "}
          <span className="green">local</span> repository. Remotes allow you to{" "}
          <span className="green">share</span> your code with others and
          collaborate on a project.
        </p>
        <p className="space-top">
          When you <span className="green">clone</span> a repository, git
          automatically sets up a remote named{" "}
          <span className="green">origin</span> that{" "}
          <span className="green">points</span> to the repository you{" "}
          <span className="green">cloned</span> from.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Add a custom remote</p>
            <p>git remote add remote-name remote-url</p>
            <p className="space-top red">
              #View list of all remotes in your local repository
            </p>
            <p>git remote -v</p>
            <p className="space-top red">#Change url of an existing remote</p>
            <p>git remote set-url remote-name new-url</p>
            <p className="space-top red">#Change name of a remote</p>
            <p>git remote rename old-name new-name</p>
            <p className="space-top red">#Remove a remote</p>
            <p>git remote remove remote-name</p>
          </div>
        </pre>
        <h3>Fetch, Push and Pull</h3>
        <p>
          <span className="blanchedalmond">Fetch: </span>
          It is used <span className="green">retrieve</span> commits and other
          information from a <span className="green">remote</span> repository.
          It <span className="green">doesn't merge</span> those changes with
          your local branch. Instead, it <span className="green">updates</span>{" "}
          your local copy of the remote branches, so that you can{" "}
          <span className="green">see</span> the changes that have been made to
          the repository since your <span className="green">last fetch</span>.
          It is useful for keeping your <span className="green">local</span>{" "}
          repository in <span className="green">sync</span> with the{" "}
          <span className="green">remote</span> repository, especially when
          working on a project with other people. It's also a good practice to
          <span className="green"> fetch changes</span> from the{" "}
          <span className="green">remote</span> repository{" "}
          <span className="green">before</span> trying to{" "}
          <span className="green">push</span> your{" "}
          <span className="green">own changes</span>, so you can{" "}
          <span className="green">ensure</span> that you are working with the{" "}
          <span className="green">latest</span> version of the code.
        </p>
        <p className="space-all">
          When you fetch, git retrieves all the branches that you've set up to
          track in your local repository and it updates the remote-tracking
          branches. These branches are local branches that represent the state
          of the corresponding branches in the remote repository. These
          remote-tracking branches allow you to see the changes that have been
          made to the remote repository since your last fetch.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Fetch from a remote</p>
            <p>git fetch remote-name</p>
            <p className="space-top red">
              #Fetch from a specific branch in the remote repository
            </p>
            <p>git fetch remote-name branch-name</p>
          </div>
        </pre>
        <p className="space-all">
          <span className="blanchedalmond">Push: </span>
          It is used to <span className="green">send</span> your{" "}
          <span className="green">local</span> commits to a{" "}
          <span className="green">remote</span> repository. It{" "}
          <span className="green">updates</span> the{" "}
          <span className="green">remote</span> repository with the{" "}
          <span className="green">new commits</span> from your{" "}
          <span className="green">local</span> repository.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Push changes to master branch</p>
            <p>git push -u origin master</p>
            <p className="em white">[origin is the remote name]</p>
            <p className="space-top red">#Push changes to any branch</p>
            <p>git push remote-name local-branch-name</p>
            <p className="space-top red">
              #Push to remote with same name as local
            </p>
            <p>git push</p>
            <p className="em white">
              [It'll push commits from current local branch to the remote with
              same name]
            </p>
            <p className="space-top red">#Push all local branches</p>
            <p>git push --all origin</p>
            <p className="space-top red">#Push all the tags</p>
            <p>git push --tags origin</p>
          </div>
        </pre>
        <p className="space-bottom">
          If the remote brance doesn't exist, git will create a new one. You can
          use the <span className="green">-u</span> flag to set up the{" "}
          <span className="green">upstream</span> tracking, so you don't have to
          specify the remote and branch name every time you push.
        </p>
        <p className="space-bottom">
          It's important to note that <span className="green">git push</span>{" "}
          will <span className="green">fail</span> if the remote repository has{" "}
          <span className="green">commits</span> that you{" "}
          <span className="green">don't</span> have in your local repository. In
          this case, you need to first <span className="green">fetch</span> the
          remote changes and <span className="green">merge</span> them with your
          local repository before you can push your own changes.
        </p>
        <p className="space-all">
          <span className="blanchedalmond">Pull:</span> It{" "}
          <span className="green">retrieves</span> the latest commits from a
          remote repository and <span className="green">merges</span> them with
          your local repository.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Pull from remote</p>
            <p>git pull remote-name branch-name</p>
          </div>
        </pre>
        <h3>Rebase</h3>
        <p>
          Rebasing in git is the process of{" "}
          <span className="green">taking</span> the commits from one branch and{" "}
          <span className="green">replaying</span> them on top of{" "}
          <span className="green">another</span> branch. This can be used to{" "}
          <span className="green">synchronize</span> the commits of{" "}
          <span className="green">one</span> branch with the commits of{" "}
          <span className="green">another</span> branch, or to change the{" "}
          <span className="green">linear history</span> of a branch. Rebasing{" "}
          <span className="green">operates</span> on commits, unlike merging
          which <span className="green">creates</span> new commits. It moves the
          entire branch to a <span className="green">new starting</span> point.
        </p>
        <p>There are two types of rebase:</p>
        <ul>
          <li>
            <p className="space-top">
              <span className="blanchedalmond">git rebase: </span> This will
              replay the commits of the current branch on top of the specified
              branch.
            </p>
          </li>
          <li>
            <p>
              <span className="blanchedalmond">git rebase --onto: </span> This
              allows you to specify both the branch to rebase onto and the
              starting point of the commits to be replayed.
            </p>
          </li>
        </ul>
        <p className="space-all">
          It is important to note that rebasing can lead to conflicts, just as
          mergin does. When conflicts occur, you'll have to resolve them
          manually before you can continue the rebase process.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p className="red">#Rebase</p>
            <p>git rebase branch-name</p>
            <p className="em white">
              [You have to be on the branch which has the commits you want to
              apply
            </p>
            <p className="em white">
              branch name here refers to where you want to reapply those
              commits]
            </p>
          </div>
        </pre>
        <h3>Undo Commits</h3>
        <p className="space-bottom">
          <span className="blanchedalmond">Amend: </span>
          This allows you to modify the{" "}
          <span className="green">most recent</span> commit in your local
          repository.
        </p>
        <Code />
        <pre>
          <div className="code-body">git commit --amend</div>
        </pre>
        <p className="space-bottom">
          <span className="blanchedalmond">Revert: </span>This allows you to
          undo the changes made by a specific commit and create a new commit
          that undoes those changes. It preserves the commit{" "}
          <span className="green">history</span>.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>git revert commit-hash</p>
          </div>
        </pre>
        <p>
          <span className="blanchedalmond">Reset: </span>This allows you to undo
          commits and move the branch pointer to a previous commit. It is used
          to <span className="green">discard</span> commits,{" "}
          <span className="green">undoing</span> the changes in the working
          directory and in the commit <span className="green">history.</span> It{" "}
          <span className="green">deletes</span> commit history.
        </p>
        <p className="space-all">There are 3 modes of git reset:</p>
        <p className="space-left">
          <span className="pink">reset commit: </span>
          This mode is used to move the branch pointer to a{" "}
          <span className="green">specific</span> commit,{" "}
          <span className="green">discarding</span> any commits made{" "}
          <span className="green">after</span> that commit.
        </p>
        <p className="space-left">
          <span className="pink">reset --soft commit: </span>
          This mode is used to move the branch pointer to a specific commit, but
          it <span className="green">keeps</span> the changes made in the
          commits that are being discarded in the{" "}
          <span className="green">staging area</span>, allowing you to make new
          commits with those changes.
        </p>
        <p className="space-left space-bottom">
          <span className="pink">reset --hard commit: </span>
          This mode is used to move the branch pointer to a specific commit,
          dicarding the commits and the changes made in the commits that are
          being discarded. It <span className="green">
            permanently deletes
          </span>{" "}
          commits and it cannot be undone.
        </p>
        <Code />
        <pre>
          <div className="code-body">
            <p>git reset commit-hash</p>
            <p>git reset --soft commit-hash</p>
            <p>git reset --hard commit-hash</p>
          </div>
        </pre>
      </div>
    </motion.div>
  );
};

export default Git;
