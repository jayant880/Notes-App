function CreateNotePage() {
    const Note = [];
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        Note.push(data);
    }

    return (
        <>
            <h2> Create Note</h2>
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <label htmlFor="title">Enter the title</label>
                    <br />
                    <input name="title" type="text" id="title" placeholder="Note #1" />
                </div>
                <div className="content">
                    <label htmlFor="content">Enter your notes</label>
                    <br />
                    <textarea name="content" id="content" cols={250} rows={20}></textarea>
                </div>
                <button type="submit">Save Note</button>
            </form>
        </>
    )
}

export default CreateNotePage