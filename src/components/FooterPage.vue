<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h4>About us</h4>
                <p>we are here to create public mutual awareness to our customers</p>
            </div>
            <div class="footer-section">
                <h4>Contact us</h4>
                <ul>
                    <li>Email: info@example.com</li>
                    <li>Phone: +123 456 7890</li>
                    <li>Address: 123 Main Street, City, Country</li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Follow us</h4>
                <div class="social-links">
                    <a href="#" class="social-icon">🔗 Facebook</a>
                    <a href="#" class="social-icon">🔗 Twitter</a>
                    <a href="#" class="social-icon">🔗 LinkedIn</a>
                </div>
            </div>
        </div>
        <div class="footer-buttom">
            <p>&copy; 2025 Yourcompany. All rights reserved</p>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterPage', 
};
</script>
<style>
.footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 20px 0;
    text-align: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.footer-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
}

.footer-section{
    margin: 10px;
    max-width: 300px;
    text-align: left;
}

.footer-section h4{
    margin-bottom: 10px;
    color: #f39c12;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section li {
    margin-bottom: 5px;
}

.social-links {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.social-icon {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 14px;
}

.social-icon:hover {
    color: #f39c12;
}

.footer-bottom {
    margin-top: 20px;
    font-size: 14px;
}
</style>