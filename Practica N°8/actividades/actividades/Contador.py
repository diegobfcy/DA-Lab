import reflex as rx
class Contador(rx.State):

    def __init__(self):
        super().__init__()
        self.count = 0 
    def incrementar(self):
        self.count += 1
    def disminuir(self):

        self.count -= 1