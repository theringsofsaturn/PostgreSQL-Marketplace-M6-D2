CREATE TABLE 
	IF NOT EXISTS
		products(
			product_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			name VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
			brand VARCHAR (255) NOT NULL,
			image_url TEXT NOT NULL,
            price INTEGER NOT NULL,
            category VARCHAR (255) NOT NULL,
			created_at TIMESTAMPTZ DEFAULT NOW(),
			updated_at TIMESTAMPTZ DEFAULT NOW()
	);