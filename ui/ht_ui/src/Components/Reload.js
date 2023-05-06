
const Reload = () => {
    const reloadCount = localStorage.getItem("reloadCount");
    if (reloadCount < 1) {
      localStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } 
}

export default Reload