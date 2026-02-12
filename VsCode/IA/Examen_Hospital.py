#exo 1  

donnees = [
    [1, 2],
    [2, 3],
    [3, 5],
    [4, 4],
    [5, 6]
]


def calcul_regression_lineaire(points):
    nombre_points = len(points)

    total_x = sum(p[0] for p in points)
    total_y = sum(p[1] for p in points)
    total_x_carre = sum(p[0] ** 2 for p in points)
    total_xy = sum(p[0] * p[1] for p in points)

    coefficient_a = (nombre_points * total_xy - total_x * total_y) / (nombre_points * total_x_carre - total_x ** 2)
    coefficient_b = (total_x_carre * total_y - total_x * total_xy) / (nombre_points * total_x_carre - total_x ** 2)

    return coefficient_a, coefficient_b


coefficient_a, coefficient_b = calcul_regression_lineaire(donnees)
print(f"Coefficient a = {coefficient_a}, Coefficient b = {coefficient_b}")


#exo 2

import statsmodels.api as sm

def regression_lineaire_statsmodels(donnees):
    x = [point[0] for point in donnees]
    y = [point[1] for point in donnees]

    X = sm.add_constant(x)


    modele = sm.OLS(y, X).fit()

    pente = modele.params[1]
    intercept = modele.params[0]

    return pente, intercept


pente, intercept = regression_lineaire_statsmodels(donnees)
print(f"Pente (a) = {pente}, Intercept (b) = {intercept}")

#résultat dans le terminal :
#Coefficient a = 0.9, Coefficient b = 1.3
#Pente (a) = 0.8999999999999999, Intercept (b) = 1.3000000000000007