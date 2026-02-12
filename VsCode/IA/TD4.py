import numpy as np
import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.linear_model import LogisticRegression

iris = datasets.load_iris()
print(iris)

x = iris.data[:, :2]
y = np.where(iris.target == 0, 0, 1)

x_0 = x[y == 0]
x_1 = x[y == 1]

plt.scatter(x_0[:, 0], x_0[:, 1], color='green', label='Classe 0')
plt.scatter(x_1[:, 0], x_1[:, 1], color='yellow', label='Classe 1')
plt.xlabel('Sepal length')
plt.ylabel('Sepal width')
plt.legend()
plt.title('Visualisation des données Iris')
plt.show()

model = LogisticRegression(C=1e20)
model.fit(x, y)

new_observations = np.array([
    [5.5, 2.5],
    [7, 3],
    [3, 2],
    [5, 3]
])

predictions = model.predict(new_observations)

plt.scatter(x_0[:, 0], x_0[:, 1], color='green', label='Classe 0')
plt.scatter(x_1[:, 0], x_1[:, 1], color='yellow', label='Classe 1')
plt.scatter(new_observations[:, 0], new_observations[:, 1], color='blue', label='Nouvelles observations')
plt.xlabel('Sepal length')
plt.ylabel('Sepal width')
plt.legend()
plt.title('Visualisation des nouvelles observations')
plt.show()

print("Prédictions pour les nouvelles observations:")
print(predictions)

y_0_2 = np.where(iris.target == 0, 0, np.where(iris.target == 2, 0, 1))
y_0_1 = np.where(iris.target == 0, 1, np.where(iris.target == 1, 1, 0))

model_0_2 = LogisticRegression(C=1e20)
model_0_2.fit(x, y_0_2)

model_0_1 = LogisticRegression(C=1e20)
model_0_1.fit(x, y_0_1)

predictions_0_2 = model_0_2.predict(new_observations)
predictions_0_1 = model_0_1.predict(new_observations)

final_predictions = np.zeros(len(new_observations))
for i in range(len(new_observations)):
    if predictions_0_2[i] == 0 and predictions_0_1[i] == 1:
        final_predictions[i] = 0
    elif predictions_0_2[i] == 1 and predictions_0_1[i] == 0:
        final_predictions[i] = 2
    elif predictions_0_2[i] == 1 and predictions_0_1[i] == 1:
        final_predictions[i] = 1

print("Prédictions finales pour les nouvelles observations:")
print(final_predictions)

# A quelle classe appartiennent les nouvelles observations de l’exercice 4?
# Les nouvelles observations appartiennent à la classe 0 si predictions_0_2[i] == 0 et predictions_0_1[i] == 1, 
# à la classe 1 si predictions_0_2[i] == 1 et predictions_0_1[i] == 1, 
# et à la classe 2 si predictions_0_2[i] == 1 et predictions_0_1[i] == 0.