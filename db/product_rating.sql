--
-- Table structure for table `slick_product_rating`
--

CREATE TABLE `slick_product_rating` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `comment`  varchar(2048) COLLATE utf8_unicode_ci NULL,
  `rating` decimal(2,1) COLLATE utf8_unicode_ci NOT NULL,

  `product_id` int(10) unsigned NOT NULL,

  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),

  KEY `fk_slick_product_slick_product_rating_product_id` (`product_id`),
  CONSTRAINT `fk_slick_product_slick_product_rating_product_id` FOREIGN KEY (`product_id`) REFERENCES `slick_product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci; 