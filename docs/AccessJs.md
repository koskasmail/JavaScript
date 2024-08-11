<a name="topage"></a>

# Access Js

To access a JavaScript file located in another part of your project using the `src` attribute in an HTML `<script>` tag, you need to provide the correct relative or absolute path to the file. Here's how you can do it:

### 1. **Relative Path**
   - If your JavaScript file is in a different directory relative to your HTML file, you can use a relative path.
   - Example: If your `index.html` is in the root directory and your JavaScript file is in a `scripts` folder, the path would be:

   ```html
   <script src="scripts/yourfile.js"></script>
   ```

   - If the JavaScript file is in a higher directory, you can use `../` to navigate up the directory tree.
   - Example: If your `index.html` is in a `public` folder and the JavaScript file is one level up in a `js` folder:

   ```html
   <script src="../js/yourfile.js"></script>
   ```

### 2. **Absolute Path**
   - If you want to use an absolute path, it usually starts from the root directory of your project.
   - Example: Assuming your project structure is like this:

     ```
     /project-root
     ├── /public
     │   └── index.html
     └── /js
         └── yourfile.js
     ```

     You would use:

   ```html
   <script src="/js/yourfile.js"></script>
   ```

### 3. **Using Base URL**
   - If your project has a base URL set in the HTML `<base>` tag, all relative URLs will be resolved relative to this base URL.

   ```html
   <base href="/project-root/">
   <script src="js/yourfile.js"></script>
   ```

### 4. **From External URL**
   - If the script is hosted on an external server or CDN, use the full URL:

   ```html
   <script src="https://cdn.example.com/yourfile.js"></script>
   ```

### Example:
Suppose your project structure is as follows:

```
/my-project
├── /public
│   └── index.html
└── /assets
    └── /js
        └── script.js
```

To access `script.js` from `index.html`, you would write:

```html
<script src="../assets/js/script.js"></script>
```

Ensure that the path you specify correctly points to the location of your JavaScript file relative to the HTML file.

-----

<p align="right">(<a href="#topage">back to top</a>)</p>
<br/>
<br/>
