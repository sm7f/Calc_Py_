from tkinter import *  

# ----------------------------------------------------------------------------------------------------------------------
janela = Tk()  
janela.resizable(width=False, height=False)  
janela.geometry('400x200')  
janela.title('Calculadora')  

# ------------------------------- Display ------------------------------------------------------------------------------

texto = Label(janela, text='Resultado')  
texto.place(x=100, y=102)  # Posição

texto2 = Label(janela, text='= ', font='bold')  
texto2.place(x=80, y=100)  # Posição

caixa1 = Entry(janela)  # Display 1
caixa1.place(x=50, y=70)  # Posição

caixa2 = Entry(janela)  # Display 2
caixa2.place(x=200, y=70)  # Posição


# ------------------------------ Adição ---------------------------------------------------------------------------------

def bt_Ad():  # Função para fazer a operação
    try:

        n1 = float(caixa1.get())  # get valor caixa1

        n2 = float(caixa2.get())  # get valor caixa2

        texto['text'] = n1 + n2  

    except ValueError:  # valor diferente

        texto['text'] = 'Valor invalido'


# ------------------------------- Subtração -----------------------------------------------------------------------------
def bt_Sb():
    try:

        n1 = float(caixa1.get())

        n2 = float(caixa2.get())

        texto['text'] = n1 - n2

    except ValueError:

        texto['text'] = 'Valor invalido'


# ------------------------------- Multiplicação ------------------------------------------------------------------------
def bt_Mt():
    try:

        n1 = float(caixa1.get())

        n2 = float(caixa2.get())

        texto['text'] = n1 * n2

    except ValueError:

        texto['text'] = 'Valor invalido'


# ---------------------------- Divisão ---------------------------------------------------------------------------------
def bt_Dv():
    try:

        n1 = float(caixa1.get())

        n2 = float(caixa2.get())

        texto['text'] = n1 / n2

    except ValueError:

        texto['text'] = 'Valor invalido'


# ----------------------------- Botões ---------------------------------------------------------------------------------
# atribuindo função aos botões
btAd = Button(janela, text='➕', font='bold', width=4, command=bt_Ad)  # formatando botões e atribuindo a função
btAd.place(x=100, y=130)  # Posição

btSb = Button(janela, text='➖', font='bold', width=4, command=bt_Sb)
btSb.place(x=145, y=130)

btMt = Button(janela, text='✖', font='bold', width=4, command=bt_Mt)
btMt.place(x=190, y=130)

btDv = Button(janela, text='➗', font='bold', width=4, command=bt_Dv)
btDv.place(x=235, y=130)

janela.mainloop()

