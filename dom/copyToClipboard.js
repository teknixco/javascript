const copyToClipboard = (text) => {
    navigator.clipboard?.writeText &&
    navigator.clipboard.writeText(text);
}