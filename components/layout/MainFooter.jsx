export default function MainFooter() {
  return (
    <footer>
      <form>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows="5" />
        </div>
        <button>Send feedback</button>
      </form>
    </footer>
  );
}
