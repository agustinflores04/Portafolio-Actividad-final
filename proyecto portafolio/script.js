function mostrarCartelBienvenida() {
            const modal = document.createElement('div');
            modal.id = 'modalBienvenida';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="cerrar">&times;</span>
                    <h2>¡Hola profesores, Bienvenidos a mi portafolio!</h2>
                    <p>Espero sea de su agrado mi trabajo.</p>
                </div>
            `;
            
            modal.style.cssText = `
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
                display: flex;
                justify-content: center;
                align-items: center;
            `;
            
            const content = modal.querySelector('.modal-content');
            content.style.cssText = `
                background: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                max-width: 400px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            `;
            
            document.body.appendChild(modal);
            
            const cerrar = modal.querySelector('.cerrar');
            cerrar.onclick = () => modal.remove();
            modal.onclick = (e) => {
                if (e.target === modal) modal.remove();
            };
        }

        window.addEventListener('load', mostrarCartelBienvenida);