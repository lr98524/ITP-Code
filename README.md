### ITP-Code Repository
## Who am I
I am a college student majoring in full stack development, 
## Why this exists
This repositroy is an ongoing school project used in two of my classes, ITP-140 and ITP-225, so it will probably be bigger than expected
## Warings
My To Do app wil be ruuning using local storage, this provides a risk to usere, It will be explained below
```bash
"Cross-Site Scripting (XSS) is a type of security vulnerability that allows attackers to inject malicious scripts into web applications. These scripts can then be executed in a user's browser, often leading to unauthorized access to sensitive data, session hijacking, or other malicious activities.

Local Storage, on the other hand, is a client-side storage feature in modern web browsers that allows web applications to store data in the browser. Local storage is part of the Web Storage API and is typically used for saving small amounts of data in key-value pairs (e.g., user preferences, session data, etc.). Unlike cookies, local storage has a larger capacity and data persists even after the browser is closed and reopened.

The XSS vulnerability in local storage arises from how malicious scripts can exploit this client-side storage. "
###-------------------------------------------------------------------------------------------------------###
"To prevent XSS vulnerabilities in local storage, the following practices should be applied:

Input Sanitization: Always sanitize and escape user input before storing it in local storage to prevent malicious code from being saved.

Output Encoding: When displaying data retrieved from local storage, ensure that any potentially dangerous content (such as <script>, onclick, or onload attributes) is properly encoded or stripped out.

Content Security Policy (CSP): A strong CSP can help limit the sources from which scripts are allowed to run, reducing the risk of malicious scripts executing even if they are injected into local storage.

Avoid Storing Sensitive Data: Never store sensitive information (like passwords, tokens, or session identifiers) in local storage, as it is accessible to all scripts running on the page. Use more secure alternatives like HttpOnly cookies for such data."
###-------------------------------------------------------------------------------------------------------###
"In summary, XSS vulnerabilities can affect local storage when web applications fail to properly sanitize user input. Malicious scripts stored in local storage can later execute if not properly handled when retrieved. To mitigate such risks, it's crucial to sanitize input, encode output, and avoid storing sensitive information in local storage."
```