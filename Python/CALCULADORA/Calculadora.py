from tkinter import *  # importando a biblioteca TKinter

# -------------------------------Layout---------------------------------------------------------------------------------
janela = Tk()  # Atribuindo Janela
janela.resizable(width=False, height=False)  # Fixador da janela
janela.geometry('400x200')  # Dimensões da janela
janela.title('Calculadora')  # titulo

# ------------------------------- Display ------------------------------------------------------------------------------

texto = Label(janela, text='Resultado')  # Mostra Resultado
texto.place(x=100, y=102)  # Posição

texto2 = Label(janela, text='= ', font='bold')  # formatação da fonte e layout
texto2.place(x=80, y=100)  # Posição

caixa1 = Entry(janela)  # Display 1
caixa1.place(x=50, y=70)  # Posição

caixa2 = Entry(janela)  # Display 2
caixa2.place(x=200, y=70)  # Posição


# ----------------------------- Adição ---------------------------------------------------------------------------------

def bt_Ad():  # Função para fazer a operação
    try:

        n1 = float(caixa1.get())  # get pega o valor que é escrito na variavel caixa1

        n2 = float(caixa2.get())  # get pega o valor que é escrito na variavel caixa2

        texto['text'] = n1 + n2  # executa a operação com os dois valores pegos

    except ValueError:  # excessão criada para impedir letras e simbolos

        texto['text'] = 'Valor invalido'


# ------------------------------- Subtração ----------------------------------------------------------------------------
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

