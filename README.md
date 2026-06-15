```
src/
 ├── services/
 │    ├── property-service.ts
 │    ├── blog-service.ts
 │    ├── developer-service.ts
 │    └── search-service.ts
```

# Get developer of property

```
const developer = developers.find(
 (d) => d.id === property.developerId
);

```

# Get all properties of developer

```
const developerProperties = properties.filter(
  (p) => p.developerId === developer.id
);

```

# Get property count

```
const totalProjects = properties.filter(
  (p) => p.developerId === developer.id
).length;

```

# Responsive Next JS Image - Koi Bhi Image size chalega

````
<div className="position-relative overflow-hidden rounded">
  <div
    style={{
      width: "400px",
      height: "400px",
    }}
  >
    <Image
      src={location.image}
      alt="image"
      fill
      sizes="250px"
      quality={100}
      className="object-fit-cover"
    />
  </div>
</div>;
````
