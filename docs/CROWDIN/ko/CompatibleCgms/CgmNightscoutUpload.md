# Nightscout에 업로드되는 기타 CGM

혈당 데이터를 [Nightscout](https://nightscout.github.io/)에**만** 보낼 수 있는 다른 CGM을 설정해 둔 경우 이 옵션을 사용하십시오.

```{important}
오프라인일 때, 네트워크 문제가 있을 때 또는 Nightscout 사이트가 다운되었을 때는 이 데이터 소스가 작동하지 않습니다. 주의해서 사용하십시오.
```

-   **NSClientV3**(**구성 → 통신**)에 Nightscout 사이트 정보를 설정하십시오.
-   [**구성 → 혈당 출처**](#Config-Builder-bg-source)에서 NSClient 혈당을 선택하십시오.
