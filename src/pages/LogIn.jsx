import { useLogin } from '../hooks';

const LogIn = () => {
    const {
        formData,
        errors,
        handleChange,
        handleSubmit
    } = useLogin()

    return (
        <section className="single-shoe-container">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">User Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <div className="error-message">{errors.name}</div>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    <div className="error-message">{errors.password}</div>
                </div>
                <p className="login-info">for admin permissions enter: user: admin, password: adminpass</p>
                <button className="btn update-btn" type="submit">Log In</button>
            </form>
        </section>
    )
}

export default LogIn