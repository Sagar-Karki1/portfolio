export const blogPosts = [
  {
    id: 1,
    day: "Day 01",
    title: "Create a Non-Interactive Shell User",
    excerpt:
      "The system admin team at xFusionCorp Industries needed a user account for their backup agent — but that user should never be able to log in interactively. Here's how I tackled it.",
    tags: ["Linux", "User Management", "Security"],
    date: "Feb 19, 2025",
    readTime: "4 min read",
    content: `## The Task

The system admin team at xFusionCorp Industries needed a user account for their backup agent tool. The backup agent needed an OS-level user to run under — but that user should never be able to log into the system interactively. Security first.

My job: create a user named \`james\` on App Server 1 with a non-interactive shell.

## What is a Non-Interactive Shell?

In Linux, every user has an assigned shell — the program that runs when they log in. Most humans use \`/bin/bash\`. But you can assign a shell that immediately kicks the user out instead.

**Shell options:**
- \`/bin/bash\` — Full interactive login allowed
- \`/sbin/nologin\` — Blocks login with a polite message
- \`/bin/false\` — Silently blocks login

## Steps Taken

**Step 1 — SSH into the server**

\`\`\`bash
ssh tony@172.16.238.10
\`\`\`

**Step 2 — Create the user with a non-interactive shell**

\`\`\`bash
sudo useradd -s /sbin/nologin james
\`\`\`

**Step 3 — Verify the user was created**

\`\`\`bash
grep james /etc/passwd
# james:x:1001:1001::/home/james:/sbin/nologin
\`\`\`

## Key Takeaway

Non-interactive shells are a core security practice. Service accounts don't need a terminal — giving them \`/sbin/nologin\` means even compromised credentials can't open a shell session. Always verify with \`grep username /etc/passwd\`.`,
  },
  {
    id: 2,
    day: "Day 02",
    title: "Create a Temporary User with an Expiry Date",
    excerpt:
      "Temporary access is a real-world challenge. Instead of hoping someone remembers to delete an account, Linux lets you set an automatic expiry date. Here's the clean way to do it.",
    tags: ["Linux", "User Management", "Access Control"],
    date: "Feb 20, 2025",
    readTime: "5 min read",
    content: `## The Task

A developer named \`ravi\` needed temporary access to the Nautilus project. Keyword: *temporary*. Instead of creating the account and hoping someone remembers to delete it later, the smart move is to set an automatic expiry date.

My job: create user \`ravi\` on App Server 2 with an expiry date of \`2027-02-17\`.

## Why Expiry Dates Matter

Dormant accounts are a silent security risk. Someone creates a temp account, the project ends, and the account sits there — a door nobody's watching. Expiry dates automate the cleanup.

## Steps Taken

**Step 1 — SSH into App Server 2**

\`\`\`bash
ssh steve@172.16.238.11
\`\`\`

**Step 2 — Create user with expiry date**

\`\`\`bash
sudo useradd -e 2027-02-17 ravi
\`\`\`

**Step 3 — Verify the expiry**

\`\`\`bash
sudo chage -l ravi
# Account expires: Feb 17, 2027
\`\`\`

## Bonus: Useful chage Commands

\`\`\`bash
# Change the expiry date
sudo chage -E 2028-12-31 ravi

# Remove expiry date entirely
sudo chage -E -1 ravi

# Force password change on next login
sudo chage -d 0 ravi
\`\`\`

## Key Takeaway

The \`-e\` flag in \`useradd\` is one of the simplest, most powerful access control tools you have. Always use it for temporary accounts. And always verify with \`chage -l username\`.`,
  },
  {
    id: 3,
    day: "Day 03",
    title: "Disable Direct SSH Root Login on All Servers",
    excerpt:
      "A security audit triggered a company-wide hardening task — disable root SSH login across all app servers. I tackled it two ways: manually with vi, and automatically with a sed one-liner.",
    tags: ["Linux", "SSH", "Security", "sed"],
    date: "Feb 21, 2025",
    readTime: "6 min read",
    content: `## The Task

Following a security audit, the xFusionCorp Industries security team required direct SSH root login to be disabled across all three app servers in the Stratos Datacenter.

Root is the most powerful account on any Linux system — and the first username attackers try when brute-forcing SSH. Disabling it is standard hardening.

## Method 1 — Manual edit with vi (App Server 1)

**Step 1 — SSH into the server**

\`\`\`bash
ssh tony@172.16.238.10
\`\`\`

**Step 2 — Open SSH config in vi**

\`\`\`bash
sudo vi /etc/ssh/sshd_config
\`\`\`

**Step 3 — Edit the file**

Press \`i\` to enter insert mode. Find the line:
\`\`\`bash
PermitRootLogin yes
\`\`\`
Change it to:
\`\`\`bash
PermitRootLogin no
\`\`\`
Press \`Esc\` then type \`:wq\` to save and exit.

**Step 4 — Restart SSH**

\`\`\`bash
sudo systemctl restart sshd
\`\`\`

## Method 2 — Automated with sed (App Servers 2 & 3)

Instead of manually editing the file, I used a single \`sed\` command:

\`\`\`bash
sudo sed -i 's/^PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
sudo systemctl restart sshd
\`\`\`

## What Does sed -i 's/^.../' Mean?

- \`sed\` — Stream Editor, finds and transforms text
- \`-i\` — Edit the file in-place (saves directly)
- \`s/find/replace/\` — Substitute command
- \`^\` — Regex anchor: match only at the START of a line
- The \`^\` is crucial — it prevents matching commented lines like \`# PermitRootLogin yes\`

## Verify on All Servers

\`\`\`bash
grep PermitRootLogin /etc/ssh/sshd_config
# Expected: PermitRootLogin no
\`\`\`

## Key Takeaway

The \`sed\` one-liner is the DevOps way — scriptable, fast, and perfect for automation. The \`vi\` method is your fallback when you need fine-grained control. Know both.`,
  },
];
