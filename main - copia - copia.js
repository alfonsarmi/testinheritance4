import * from as test'/modules/file.js';

test.getUsefulContents('http://www.example.com',
    data => { doSomethingUseful(data); });