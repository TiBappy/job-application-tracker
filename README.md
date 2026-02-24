১। What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

উঃ getElementById() একটি method যা একটি নির্দিষ্ট id-এর element return করে। getElementsByClassName() একটি নির্দিষ্ট class-এর সব element return করে। querySelector() CSS selector ব্যবহার করে প্রথম matching element return করে। querySelectorAll() CSS selector ব্যবহার করে সব matching element return করে।

২। How do you create and insert a new element into the DOM?

উঃ createElement() method ব্যবহার করে নতুন HTML element তৈরি করা হয়।Parent element-এর শেষে child add করে । Parent element-এর শুরুতে add করে । Specific element এর আগে insert করে।

যেমনঃ parent.appendChild(child)

৩। What is Event Bubbling? And how does it work?

উঃ ঠিক গ্যাসের মত Event Bubbling হলো JavaScript-এর একটি event propagation system, যেখানে কোনো child element-এ event ঘটলে সেই event ধাপে ধাপে তার parent → grandparent → document পর্যন্ত উপরের দিকে propagate (bubble) করে। 

৪। What is Event Delegation in JavaScript? Why is it useful?

উঃ Event Delegation হলো একটি system যেখানে আমরা child element-এ আলাদা আলাদা event listener না দিয়ে, তাদের parent element-এ একটি single event listener add করি, এবং event.target ব্যবহার করে কোন child element-এ event ঘটেছে তা সনাক্ত করি। এটা use করলে বারবার child element এ eventlistener দিতে হয না। তাই এতা ব্যবহার করা ভালো।

৫। What is the difference between preventDefault() and stopPropagation() methods?

উঃ A) preventDefault() browser-এর default action বন্ধ করে।
   B) stopPropagation() event bubbling বন্ধ করে।
