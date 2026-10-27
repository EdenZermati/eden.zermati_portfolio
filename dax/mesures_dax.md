# Mesures DAX

Mesures du modèle Power BI. La table `fashion_dashboard_clean` est la table plate produite par `scripts/02_nettoyage.py`. Une « transaction » désigne une ligne de vente.

## CA Total
Chiffre d'affaires des ventes, hors retours.

```dax
CALCULATE(
    SUM('fashion_dashboard_clean'[Line_Total_USD]),
    'fashion_dashboard_clean'[Is_Return] = FALSE()
)
```

## CA Returns
Montant des retours, en valeur positive.

```dax
ABS(CALCULATE(SUM('fashion_dashboard_clean'[Line_Total_USD]), 'fashion_dashboard_clean'[Is_Return] = TRUE()))
```

## CA Net
Chiffre d'affaires après retours.

```dax
[CA Total] - [CA Returns]
```

## Nb Transactions
Nombre de lignes de vente (hors retours).

```dax
CALCULATE(COUNTROWS('fashion_dashboard_clean'), 'fashion_dashboard_clean'[Is_Return] = FALSE())
```

## Nb Returns
Nombre de lignes de retour.

```dax
CALCULATE(COUNTROWS('fashion_dashboard_clean'), 'fashion_dashboard_clean'[Is_Return] = TRUE())
```

## Panier Moyen
CA total divisé par le nombre de lignes de vente.

```dax
DIVIDE([CA Total], [Nb Transactions])
```

## Nb Clients
Nombre de clients distincts.

```dax
DISTINCTCOUNT('fashion_dashboard_clean'[Customer ID])
```

## Quantité Vendue
Quantité vendue, hors retours.

```dax
CALCULATE(SUM('fashion_dashboard_clean'[Quantity]), 'fashion_dashboard_clean'[Is_Return] = FALSE())
```

## Produits Retournés
Quantité retournée (version corrigée : la précédente renvoyait la quantité vendue).

```dax
ABS(CALCULATE(SUM('fashion_dashboard_clean'[Quantity]), 'fashion_dashboard_clean'[Is_Return] = TRUE()))
```

## Taux Retour %
Part des lignes qui sont des retours.

```dax
DIVIDE([Nb Returns], COUNTROWS('fashion_dashboard_clean')) * 100
```

## Transactions par Client
Nombre moyen de lignes de vente par client.

```dax
DIVIDE([Nb Transactions], [Nb Clients])
```

## CA Moyen par Client
CA total moyen par client.

```dax
DIVIDE([CA Total], [Nb Clients])
```

## CA Moyen par Jour
CA total moyen par jour d'activité.

```dax
DIVIDE([CA Total], DISTINCTCOUNT('fashion_dashboard_clean'[Date]))
```

## Clients Fréquents
Clients ayant au moins 10 lignes dans la table.

```dax
CALCULATE(
    DISTINCTCOUNT('fashion_dashboard_clean'[Customer ID]),
    FILTER(
        VALUES('fashion_dashboard_clean'[Customer ID]),
        CALCULATE(COUNTROWS('fashion_dashboard_clean')) >= 10
    )
)
```

## Top 10 CA Net
CA net cumulé des 10 meilleurs clients.

```dax
CALCULATE(
    [CA Net],
    TOPN(10, ALL('fashion_dashboard_clean'[Customer ID]), [CA Net], DESC)
)
```

## CA Avec Discount
CA des lignes avec remise.

```dax
CALCULATE(
    SUM('fashion_dashboard_clean'[Line_Total_USD]),
    'fashion_dashboard_clean'[Discount] > 0
)
```

## CA Sans Discount
CA des lignes sans remise.

```dax
CALCULATE(
    SUM('fashion_dashboard_clean'[Line_Total_USD]),
    'fashion_dashboard_clean'[Discount] = 0
)
```

## Nb Transactions Avec Discount
Lignes de vente avec remise.

```dax
CALCULATE([Nb Transactions], 'fashion_dashboard_clean'[Discount] > 0)
```

## Nb Transactions Sans Discount
Lignes de vente sans remise.

```dax
CALCULATE([Nb Transactions], 'fashion_dashboard_clean'[Discount] = 0)
```

## Taux Transactions Promotionnelles
Part des transactions avec remise.

```dax
DIVIDE([Nb Transactions Avec Discount], [Nb Transactions]) * 100
```

## Discount Moyen %
Remise moyenne sur l'ensemble des lignes (les lignes sans remise comptent pour 0).

```dax
AVERAGE('fashion_dashboard_clean'[Discount]) * 100
```
