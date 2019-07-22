# The RESTy Component

The Resty functional component returns most of the components that are required for this application, see below:

```
<RESTy />
```

```function RESTy() {
  return (
    <main>
      <History />
      <section className="deck">
        <Form />
        <Json />
      </section>
    </main>
  );
}
```

RESTy brings in the JSON view, History, and Form for the application