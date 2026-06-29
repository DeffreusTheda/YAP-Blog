CREATE TABLE "posts" (
	"id" serial PRIMARY KEY,
	"title" text NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"content" text NOT NULL,
	"excerpt" text,
	"published" boolean DEFAULT false,
	"published_at" timestamp,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"email" text NOT NULL UNIQUE,
	"password_hash" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
