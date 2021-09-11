--
-- Table structure for table `slick_product`
--

CREATE TABLE `slick_product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(1024) COLLATE utf8_unicode_ci NOT NULL,
  `description`  varchar(2048) COLLATE utf8_unicode_ci NULL,
  `price` decimal(9,2) COLLATE utf8_unicode_ci NOT NULL,

  `image_url` varchar(1024) COLLATE utf8_unicode_ci NULL,

  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci; 