import { useState } from 'react';

export default function AddNoteForm({ user, setNote, note }) {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        user: user._id
    });

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        setNote(formData);
        console.log(formData);
    }

    return (
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label><br />
                    <input
                        className="form-control"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div><br />
                <div className="form-group">
                    <label>Content</label><br />
                    <textarea
                        className="form-control"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn"
                >
                    ADD NOTE
                </button>
            </form>
        </>
    );
}