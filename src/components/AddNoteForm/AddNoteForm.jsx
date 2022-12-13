import { useState } from 'react';

export default function AddNoteForm({ user, addNote }) {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addNote(formData);
        setFormData({
            title: '',
            content: '',
        });
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