const accessExternalIframe = function () {
  iframeExternal.onload = function () {
    const iframeWindow = iframeExternal.contentWindow; // Ok
    try {
      // const doc = iframeExternal.contentDocument; // Error
      // const href = iframeExternal.contentWindow.location.href; // Error
      iframeExternal.contentWindow.location = "/"; // Ok
      iframeExternal.onload = null;
    } catch (e) {
      alert(e);
    }
  };
};

const accessInternalIframe = function () {
  const oldDoc = iframeInternal.contentDocument;
  iframeInternal.onload = function () {
    const newDoc = iframeInternal.contentDocument;
    console.log(oldDoc === newDoc);
    // iframeInternal.contentDocument.body.prepend("Hello world");
  };
};

accessInternalIframe();
