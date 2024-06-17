CREATE TABLE `todos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`done` integer DEFAULT true,
	`createAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
